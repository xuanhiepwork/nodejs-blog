const Course = require('../models/Course');


class SiteController {

    // [GET] /
    index(req, res) {
        Course.find({}, function(err, courses) {
            if (!err) res.json(courses); //kh ông có lỗi thì trả về courses
            else res.status(400).json({ error: 'Error!!!' }); // nếu có lỗi thì trả về lỗi
        })

        // res.send('home');
    }

    // [GET] /search
    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();
