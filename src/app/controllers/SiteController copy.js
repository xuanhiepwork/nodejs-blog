
class SiteController {

    // [GET] /
    index(req, res) {
        res.send('home');
    }

    // [GET] /search
    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();
