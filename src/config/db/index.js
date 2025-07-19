
function connectDB() {
  const mongoose = require('mongoose');
  
  async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true, 
            useUnifiedTopology: true, // Sử dụng unified topology để kết nối MongoDB
            useCreateIndex: true, 
        });
        console.log('Connected to MongoDB successfully');
    } catch(error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
  }
}

module.exports = { connect };