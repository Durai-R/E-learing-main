const express = require('express');
const mRegisters = require("../models/mRegisters");

exports.saveRegister = function(req,res){
    const oInputData = req.body;
    const newRegister = new mRegisters({
        name : oInputData.name,
        mobile : oInputData.mobile,
        mail : oInputData.mail,
        highedu : oInputData.highedu,
        courses : oInputData.courses
    });
    newRegister.save().then(savedReg => {
        console.log("Course saved successfully");
        res.status(201).json({ code: "SAVED_SUCCESS" });
    }).catch(err => {
        console.error("Error saving the course:", err);
        res.status(500).json({ error: 'Unknown Error saving the course' });
    });
};

exports.fetchRegisters = function(req,res){
    mRegisters.find((err,docs) => {
        if(err){
            res.status(500).json({ error: 'Error finding registers' },null);
        }else if (docs && docs.length){
            res.status(200).json(null,{ courses: docs });
        }else{
            res.status(200).json({code : "NO_REGISTERS"},null);
        }
    });
}