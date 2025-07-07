const { default: mongoose } = require("mongoose");

module.exports = {
    // Chuyển đổi các đối tượng Mongoose thành đối tượng thuần JavaScript
    mutipleMongooseToObject: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
}

