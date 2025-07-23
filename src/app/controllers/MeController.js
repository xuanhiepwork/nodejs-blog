
const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoo');


class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {

        //Sử dụng thư viện mongoose-delete để đếm số lượng khóa học đã xóa mềm
        // Course.countDocuments()
        //     .then((deleteCount) => {
        //         console.log(deleteCount);
        //     })
        //     .catch(() => {})

        // Course.find({})
        //     .then((courses) => 
        //         res.render('me/stored-courses', {
        //             courses: mutipleMongooseToObject(courses),
        //         }),
        //     )
        //     .catch(next);

        
        // Sử dụng Promise.all để lấy cả danh sách khóa học và số lượng khóa học đã xóa mềm
        // Viết gọn lại của 2 thằng ở trên | 2 thằng trên đều là Promise -> Dùng promise.all
        Promise.all([ Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deleteCount]) => 
                res.render('me/stored-courses', {
                    deleteCount,
                    courses: mutipleMongooseToObject(courses),
                })
            )
            .catch(next);
    }

    // [GET] /me/trash/courses
    // trashCourses(req,res,next)  {
    //     Course.find({})
    //         .then((courses) => 
    //             res.render('me/trash-courses', {
    //                 courses: mutipleMongooseToObject(courses),
    //             }),
    //         )
    //         .catch(next);
    // }

    // [GET] /me/trash/courses | Sử dụng thư viện mongoose-delete để xóa mềm
    trashCourses(req,res,next)  {
        Course.findDeleted({})
            .then((courses) => 
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();