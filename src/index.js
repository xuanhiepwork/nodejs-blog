const path = require('path'); // Thư viện để xử lý đường dẫn
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars').engine;


const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect(); // Call the connect function from db module

const app = express();
const port = 3000;

//Use static foulder
app.use(express.static(path.join(__dirname, 'public'))); // Để sử dụng các file tĩnh như css, js, images

app.use(
    express.urlencoded({ 
        extended: true
})); // Để sử dụng các tham số truy vấn từ form
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'handlebars', 
    exphbs({ 
        extname: '.hbs',
    })
);//app('đặt tên', gọi thư viện)
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views')); // Đặt thư mục chứa các file view

// Routes init
route(app);
//  {
    // Được định nghĩa là route - và đây là arrow function
    // app.get('/', (req, res) => {
    //     res.send('Hello World!');
    // });

    // app.get('/news', (req, res) => {
    //     res.send('news');
    // });

    // app.get('/Search', (req, res) => {
        //localhost:3000/search ?q=f8 lap trinh &ref=mycv &author=sondn
        // console.log(req.query.q); // Lấy giá trị của tham số truy vấn 'q'
    //     res.send('Search');
    // });

    // app.post('/Search', (req, res) => {
    //     console.log(req.body);
    //     res.send('Search');
    // });
// }


//local host --- hosting

//Action ---> Dispatcher ---> Function handler 


// 127.0.0.1

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
