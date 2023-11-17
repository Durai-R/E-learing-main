const express = require("express");
const cCourse = require('../controllers/cCourse')
const routes = express();
// courses requests
routes.get("/save-courses",cCourse.saveCourse);
routes.post("/update-courses",cCourse.updateCourse);
routes.post("/fetch-courses",cCourse.fetchCourses);

module.exports = routes;