const newsRouter = require('./news');
const siteRouter = require('./site');


function route(app) {

    app.use('/news', newsRouter); // Sử dụng router cho /news

    // app.get('/Search', (req, res) => {
    //     res.send('Search');
    // });
    
    // app.post('/Search', (req, res) => {
    //     console.log(req.body);
    //     res.send('Search');
    // })
    
    // Đã chuyển sang sử dụng siteRouter
    // app.get('/', (req,res) => {
    //     res.send('Home');
    // });

    app.use('/', siteRouter); //Trang gốc thì luôn để cuối cùng, nó sẽ đi qua từng thằng, khớp thằng nào thì sẽ dùng lại ở đó
}

module.exports = route;





