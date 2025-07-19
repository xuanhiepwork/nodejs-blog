const newsRouter = require('./news');
const meRouter = require('./courses');
const coursesRouter = require('./courses');
const siteRouter = require('./site');


function route(app) {

    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    
    app.use('/', siteRouter); //Trang gốc thì luôn để cuối cùng, nó sẽ đi qua từng thằng, khớp thằng nào thì sẽ dùng lại ở đó
    
    // Đã chuyển sang sử dụng siteRouter
    // app.get('/', (req,res) => {
    //     res.send('Home');
    // });
}

module.exports = route;





