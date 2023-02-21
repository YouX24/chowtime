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


// post route for inserting into supabase
app.post("/insert", async (req, res) => {
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


// get route to get options of a survey
app.get("/retrieve/:surveyID", async (req, res) => {
    const { surveyID } = req.params
    // const columns = ["optName", "surveyID"];
    const { data, error } = await supabase
        .from("options")
        .select("id, optName, surveyID")
        .eq("surveyID", surveyID)
    
    if (error) {
        return res.status(400).send({status: "failed"})
    } else {
        return res.status(200).json(data)
    }
})

app.listen(5000, () => {console.log("Server started on port 5000")})
