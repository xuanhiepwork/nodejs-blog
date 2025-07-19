
const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoo');


class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {

        req.query.name = 'F8'; //get
        req.body.name = 'F8'; //post

        req.params.slug; // lấy slug từ URL

        res.send('Course detail - ' + req.params.slug);

        Course.findOne({ slug: req.params.slug })
            .then(course => {
                // res.json(course); // trả về course dưới dạng JSON
                res.render('courses/show', {course: mongooseToObject(course) }); // sử dụng hàm mutipleMongooseToObject để chuyển đổi đối tượng Mongoose thành đối tượng thuần JavaScript
            })
            .catch(next); // nếu có lỗi thì chuyển sang middleware xử lý lỗi
    }

    // [GET] /courses/:create
    create(req, res, next) {
        res.render('courses/create'); 
    }

    // [POST] /courses/:store
    store(req, res, next) {
        const formData = req.body; // lấy dữ liệu từ form gửi lên
        // res.json(req.body); // trả về dữ liệu từ form dưới dạng JSON | body là dữ liệu được gửi từ client(form)
        // req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`; // tạo đường dẫn hình ảnh từ videoId
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`; // tạo đường dẫn hình ảnh từ videoId
        
        //const course = new Course(req.body); // tạo một đối tượng Course mới từ dữ liệu gửi lên
        const course = new Course(formData); // tạo một đối tượng Course mới từ dữ liệu gửi lên
        
        course.save() // lưu đối tượng Course vào cơ sở dữ liệu
            .then(() => res.redirect('/')) // nếu lưu thành công thì chuyển hướng về trang chủ
            .catch(error => {
                console.error(error); // in lỗi ra console
                res.status(500).send('Error saving course'); // trả về lỗi 500 nếu có lỗi
            });
            
        res.send('Course created successfully'); // trả về thông báo thành công
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {
                res.render('courses/edit', { 
                    course: mongooseToObject(course) 
                }); // render view edit với dữ liệu course
            })
            .catch(next);
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses')) // nếu cập nhật thành công thì chuyển hướng về trang danh sách khóa học đã lưu
            .catch(next); // nếu có lỗi thì chuyển sang middleware xử lý lỗi
    }

    // [DELETE] /courses/:id
    destroy(req, res, next) { 
        //Promise
        Course.deleteOne({ _id: req.params.id }) // xóa khóa học theo id
            .then(() => res.redirect('back')) // nếu xóa thành công thì chuyển hướng về trang trước đó
            .catch(next); // nếu có lỗi thì chuyển sang middleware xử lý lỗi
    }
}

module.exports = new CourseController();
