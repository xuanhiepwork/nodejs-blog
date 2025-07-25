const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CoursesController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormActions); // Xử lý các hành động trên nhiều khóa học | Để nó lên trên những thằng :id để tránh bị nhầm -> kh là máy sẽ hiểu nhầm là :id
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore); // Sử dụng phương thức PATCH để khôi phục khóa học
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy); // Sử dụng phương thức DELETE để xóa vĩnh viễn khóa học
router.get('/:slug', courseController.show);


module.exports = router;