const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars').engine;
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); // Để sử dụng các file tĩnh như css, js, images

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', exphbs({ 
  extname: '.hbs',
}));//app('đặt tên', gọi thư viện)
app.set('view engine', 'handlebars');

// Được định nghĩa là route - và đây là arrow function
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/tin-tuc', (req, res) => {
    res.send('Tin tức');
})


// 127.0.0.1
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
