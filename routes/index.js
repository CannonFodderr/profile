const   express = require('express'),
        router = express.Router();

router.get('/', (req, res)=>{
    res.render('index', {title: "Homepage"});
});

router.get('/profile', (req, res)=>{
    res.render('profile', {title: "Profile"});
});
router.get('/ecommerce', (req, res)=>{
    res.render('ecommerce', {title: "eCommerce"});
});
router.get('/webdev', (req, res)=>{
    res.render('webdev', {title: "Web Developer"});
});
router.get('/sound', (req, res)=>{
    res.render('sound', {title: "Sound Designer"});
});

router.get('*', (req, res)=> res.send('Error 404 - Page not found'));

module.exports = router;