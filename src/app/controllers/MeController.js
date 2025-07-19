
const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoo');


class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
        res.send('me/stored-courses');
    }
}

module.exports = new MeController();