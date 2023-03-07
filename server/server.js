const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
require('dotenv').config()

// const supabase = new Supabase(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
const app = express()
const jsonParser = express.json()

app.use(jsonParser);
app.use(cors())


// Supabase Connection
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)


// insert into survey table
const handleSurveyInsert = async (surveyID) => {
    const { data, error } = await supabase
        .from("survey")
        .insert({surveyID})
}


// insert into options table
const handleOptionInsert = async (id, optName, surveyID, wins) => {
    const { data, error } = await supabase
        .from("options")
        .insert({id, optName, surveyID, wins}) // variable name must be same as in supabase
}


app.get('/', (req, res) => {
    // res.setHeader("Access-Control-Allow-Credentials", "true")
    res.send('chow time api')
})


// post route for inserting into supabase
app.post("/insert", async (req, res) => {
    // res.setHeader("Access-Control-Allow-Credentials", "true")
    const { options, surveyID } = req.body
    if (!options) {
        return res.status(400).send({status: "failed"})
    }

    handleSurveyInsert(surveyID)

    for (let opt in options) {
        handleOptionInsert(opt, options[opt], surveyID, 0)
    }
    
    res.status(200).send({status: "received"})
})


// update option wins
app.put("/update-win", async (req, res) => {
    // res.setHeader("Access-Control-Allow-Credentials", "true")
    const { option, surveyID } = req.body

    if (!option || !surveyID) {
        return res.status(400).send({status: "failed"})
    }

    const { data, error } = await supabase
    .rpc('update_win', {survey_id: surveyID, option_name: option})

    if (error) {
        return res.status(400).send({status: "failed"})
    } else {
        return res.status(200).json(data)
    }
})


// get route to get options of a survey
app.get("/retrieve/:surveyID", async (req, res) => {
    // res.setHeader("Access-Control-Allow-Credentials", "true")
    const { surveyID } = req.params
    const { data, error } = await supabase
        .from("options")
        .select("id, optName, surveyID")
        .eq("surveyID", surveyID)
    
    if (error) {
        return res.status(404).send({status: "not found"})
    } else {
        return res.status(200).json(data)
    }
})


// get route to get options and options wins
app.get("/getresult/:surveyID", async (req, res) => {
    // res.setHeader("Access-Control-Allow-Credentials", "true")
    const { surveyID } = req.params
    const { data, error } = await supabase
        .from("options")
        .select("optName, wins")
        .eq("surveyID", surveyID)
        .order("wins", {ascending: false})

    if (error) {
        return res.status(404).send({status: "not found"})
    } else {
        return res.status(200).json(data)
    }
})

app.listen(process.env.PORT, () => {console.log("Server started")})
