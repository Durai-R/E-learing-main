const express = require("express");
const mCourse = require("../models/mCourse");

exports.saveCourse = function (req, res) {
  console.log("is coming");
  return;
  const oInputData = req.body;
  const newCourse = new mCourse({
    code: oInputData.code,
    name: oInputData.name,
    description: oInputData.description,
    actulFee: oInputData.actulFee,
    discFee: oInputData.discFee,
    duration: oInputData.duration,
    regCount: oInputData.regCount,
    offers: oInputData.offers,
  });
  newCourse
    .save()
    .then((savedCourse) => {
      console.log("Course saved successfully");
      res.status(201).json({ code: "SAVED_SUCCESS" });
    })
    .catch((err) => {
      console.error("Error saving the course:", err);
      res.status(500).json({ error: "Unknown Error saving the course" });
    });
};

exports.updateCourse = function (req, res) {
  const oUpdtData = {
    code: oInputData.code,
    name: oInputData.name,
    description: oInputData.description,
    actulFee: oInputData.actulFee,
    discFee: oInputData.discFee,
    duration: oInputData.duration,
    regCount: oInputData.regCount,
    offers: oInputData.offers,
  };
  mCourse.updateOne({ _id: req.body._id }, oUpdtData, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error updating the course" });
    } else {
      res.json({ message: "UPDT_SUCCESS" });
    }
  });
};

exports.fetchCourses = function (req, res) {
  mCourse.find((err, docs) => {
    if (err) {
      res.status(500).json({ error: "Error finding courses" }, null);
    } else if (docs && docs.length) {
      res.status(200).json(null, { courses: docs });
    } else {
      res.status(200).json({ code: "NO_COURSE" }, null);
    }
  });
};
