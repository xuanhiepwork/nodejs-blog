
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = require('mongoose').Schema;

const Course = new Schema({
    name: {type :String, maxlenth: 255, required: true, unique: true,},
    description: {type: String, maxlenth: 600,},
    image: {type: String, },
    videoId: {type: String, required: true,},
    level: {type: String, },
    slug: {type: String, slug: 'name', unique: true,}, // sử dụng slug để tạo đường dẫn thân thiện với SEO từ tên khóa học
    // createAt: {type: Date, default: Date.now,}, // sử dụng timestamps để tự động tạo trường createAt và updateAt
    // updateAt: {type: Date, default: Date.now,}, // sử dụng timestamps để tự động tạo trường createAt và updateAt
}, {
    timestamps: true, // tự động tạo trường createdAt và updatedAt
})

module.exports = mongoose.model('Course', Course);