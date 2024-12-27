const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const registrations = [];
let regno = 1;
app.post('/jobapplications', (req, res) => {
    const { name, email, phone, position, experience, coverLetter } = req.body;
    const fields = { regno, name, email, phone, position, experience, coverLetter };
    registrations.push(fields);
    regno++;
    console.log(`Application with registration number ${fields.regno}:`, fields);
    res.status(201).json({
        message: 'Application submitted successfully',
        registration: fields
    });
});
app.get("/jobapplications", (req, res) => {
    res.json(registrations);
});
app.listen(5001, () => {
    console.log("Server is running on port 5001.");
});
