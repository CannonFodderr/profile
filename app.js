const   express                 = require('express'),
        app                     = express(),
        router                  = express.Router(),
        path                    = require('path'),
        dotenv                  = require('dotenv').config(),
        bodyParser              = require('body-parser'),
        methodOverride          = require('method-override'),
        mongoose                = require('mongoose'),
        passport                = require('passport'),
        LocalStrategy           = require('passport-local'),
        passportLocalMongoose   = require('passport-local-mongoose'),
        port                    = process.env.PORT,
        dbURL                   = process.env.DBURL;

mongoose.connect(dbURL)
.then((connection)=>{console.log('Connected to DB')})
.catch((err)=>{
    console.error(err);
});

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get('/', (req, res)=>{
    res.render('index', {title: "Homepage"});
});

app.listen(port, (req, res)=> console.log(`Server is running on ${port}`));

