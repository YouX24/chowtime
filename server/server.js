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

app.post("/createSurvey", (req, res) => {
    const data = req.body
    console.log(data)
    res.send(data)
});


// app.get("/info", (req, res) => {
//     res.status(200).json({info: "preset text"})
// })

// insert into survey table
const handleSurveyInsert = async (surveyID) => {
    const { data, error } = await supabase
        .from("survey")
        .insert({surveyID})
}


// insert into options table
const handleOptionInsert = async (id, optName, surveyID) => {
    const { data, error } = await supabase
        .from("options")
        .insert({id, optName, surveyID})
}

app.post("/", async (req, res) => {
    const { options, surveyID } = req.body
    if (!options) {
        return res.status(400).send({status: "failed"})
    }

    handleSurveyInsert(surveyID)

    for (let opt in options) {
        handleOptionInsert(opt, options[opt], surveyID)
    }


    res.status(200).send({status: "received"})
})

app.listen(5000, () => {console.log("Server started on port 5000")})
