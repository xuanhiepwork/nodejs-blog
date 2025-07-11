
const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoo');


class CourseController {
    // [GET] /courses/:slug
    show(req, res) {

        req.query.name = 'F8'; //get
        req.body.name = 'F8'; //post

        req.params.slug; // lấy slug từ URL

        res.send('Course detail - ' + req.params.slug);

        Course.findOne({ slug: req.params.slug })
            .then(course => {
                // res.json(course); // trả về course dưới dạng JSON
                res.render('courses/show');
            })
            .catch(next); // nếu có lỗi thì chuyển sang middleware xử lý lỗi
    }
}

module.exports = new CourseController();
