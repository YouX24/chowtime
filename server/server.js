const express = require("express");
// const Supabase = require("@supabase/supabase.js");
const cors = require("cors")
require('dotenv').config()

// const supabase = new Supabase(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
const app = express()
const jsonParser = express.json()

app.use(jsonParser);
app.use(cors())

app.post("/createSurvey", (req, res) => {
    const data = req.body
    console.log(data)
    res.send(data)
});


// app.get("/info", (req, res) => {
//     res.status(200).json({info: "preset text"})
// })

app.post("/", (req, res) => {
    const { items, surveyID } = req.body
    console.log(items, surveyID)
    if (!items) {
        return res.status(400).send({status: "failed"})
    }
    res.status(200).send({status: "received"})
})

app.listen(5000, () => {console.log("Server started on port 5000")})
