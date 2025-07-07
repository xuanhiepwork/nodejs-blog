const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoo');


class SiteController {

    // [GET] /

    index(req, res, next) {
        Course.find({}, function(err, courses) {
            if(!err) {
                res.json(courses); //kh ông có lỗi thì trả về courses
            } 
            else {
                next(err); // nếu có lỗi thì chuyển sang middleware xử lý lỗi
            }
        })

        //Promise version
        Course.find({})
            .then(courses => 
            {
                res.render('home', {
                    title: 'Home Page', 
                    // courses: courses, // nếu không sử dụng hàm mutipleMongooseToObject thì truyền trực tiếp courses
                    courses: mutipleMongooseToObject(courses), // chuyển đổi các đối tượng Mongoose thành đối tượng thuần JavaScript, 
                });
            }) 
            .catch(next); // nếu có lỗi thì chuyển sang middleware xử lý lỗi
    }

    // [GET] /search
    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();
