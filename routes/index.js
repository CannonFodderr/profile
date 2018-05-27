const   express = require('express'),
        router = express.Router();

router.get('/', (req, res)=>{
    res.render('index', {title: "Homepage"});
});

router.get('*', (req, res)=> res.send('Error 404 - Page not found'));

module.exports = router;