// Set up
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
// var jwt        = require("jsonwebtoken")
var jwt = require("jwt-simple");
mongoose.Promise = require('bluebird');
 
// Configuration
// var promise = mongoose.connect('mongodb://localhost/colin', {
// var promise = mongoose.connect('mongodb://colin:colin@localhost:27017/colin', {
//   useMongoClient: true
// });

// var db = mongoose.createConnection('mongodb://localhost/colin', {
//   useMongoClient: true,
//   /* other options */
// });

mongoose.connect('mongodb://localhost/colin', {
  useMongoClient: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("db -- connected");
});

// @Colin 20170716
app.use(morgan('default')); // 原来是dev

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended':'true'}));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use(cors());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

var srlistSchema = mongoose.Schema({
    name: String,
    val: String
});

var userSchema = mongoose.Schema({
    user_phone: String,
    login_date: String
});

// Models
var srListModel = mongoose.model('srlists', srlistSchema);
var userModel = mongoose.model('userlists', userSchema);
// var userlistModel = mongoose.model('userlists', userlistSchema);

// srlistSchema.methods.speak = function () {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//   console.log(greeting);
// }

// var listing = new srListModel({ name: '李熙盛测试一下中文效果' , val: '06'});
// console.log(listing.name);

// Routes
app.get('/api/reguser', function(req, res){
    console.log("Routes -- reguser -- start")
    console.log("Routes -- reguser -- req.query:" + req.query);
    console.log("Routes -- reguser -- req.query.userPhone:" + req.query.userPhone);
    console.log("Routes -- reguser -- req.query.loginDate:" + req.query.loginDate);

    userModel.findOne({"userPhone": req.query.userPhone}, function (err, docs) {
        console.log("Routes -- reguser -- findOne -- docs :" + docs);
        if(docs == null)
        {
            console.log("Routes -- reguser -- findOne -- null Start");

            let user = {user_phone: req.query.userPhone, login_date: req.query.loginDate};
            // let user = {userPhone: 'test01', loginDate: 'test'};

            // console.log("Routes -- reguser -- findOne -- user:" + user);
            // {user_phone: 'test01', login_date: 'test'}

            var user_model = new userModel(user);

            console.log("Routes -- reguser -- findOne -- user_model.new");

            user_model.save(user_model);

            console.log("Routes -- reguser -- findOne -- user_model.save");
            // res.send(user);
            res.json(user);
            // console.log("Routes -- jwt" + jwt.sign(user, process.env.JWT_SECRET));
            // var user = new userlistModel({
            //     userPhone: req.query.userPhone,
            //     userToken: 
            //     val: 'x' + i
            // });
        }
        else
        {

        }

        // res.json(docs);
    });
});

app.get('/api/getsrlist', function(req, res){
    console.log("Routes -- getsrlist");

    // for(var i = 10; i < 90; i++)
    // {
    //     //@造数据
    //     var listing = new srListModel({ name: '测试' + i + '记录保存' + i +'Colin' , val: 'x' + i});
    //     listing.save(listing);
    // }

    srListModel.find(function (err, docs) {
        console.log("####### the docs 1 :" + docs);
        res.json(docs);
        console.log("####### the res 1 :" + res);
    });
});

app.get('/api/getsrlist:srme', function(req, res){
    console.log("Routes -- getsrlist -- req.params.srme:" + req.params.srname);
    // var pat = RegExp("" + req.params.srname);
  //{'$regex' : ".*" + req.params.srname + ".*"}
    var srname = eval("/"+req.params.srme+"/i");
    srListModel.find({"name":srname}, function (err, docs) {
        console.log("####### the docs 2000 :" + docs);
        res.json(docs);
        console.log("####### the res 1 :" + res);
    });

    // listing.save(function (err, listing) {
    //     if (err) return console.error(err);
    // });
});

app.get('/api/getuser', function(req, res){
    var userlistSchema = mongoose.Schema({
        userPhone: String,
        userToken: String,
        loginDate: [{Date: String}]
    });

    // var userlistModel = mongoose.model('userlists', userlistSchema);

    console.log("Routes -- getuser");
    console.log(req.query);
    console.log(req.query.userPhone);
    console.log("Routes -- getuser-----------------------");

    userlistModel.findOne({"userPhone": req.query.userPhone}, function (err, docs) {
        console.log("####### the docs 1 :" + docs);
        if(docs == null)
        {
            console.log("Routes -- jwt" + jwt.sign(user, process.env.JWT_SECRET));
            // var user = new userlistModel({
            //     userPhone: req.query.userPhone,
            //     userToken: 
            //     val: 'x' + i
            // });
        }

        res.json(docs);
    });

    // res.json(req.query);
});

//     // Get reviews
//     app.get('/api/reviews', function(req, res) {
 
//         console.log("fetching reviews");
 
//         // use mongoose to get all reviews in the database
//         Review.find(function(err, reviews) {
 
//             // if there is an error retrieving, send the error. nothing after res.send(err) will execute
//             if (err)
//                 res.send(err)
 
//             res.json(reviews); // return all reviews in JSON format
//         });
//     });
 
//     // create review and send back all reviews after creation
//     app.post('/api/reviews', function(req, res) {
 
//         console.log("creating review");
 
//         // create a review, information comes from request from Ionic
//         Review.create({
//             title : req.body.title,
//             description : req.body.description,
//             rating: req.body.rating,
//             done : false
//         }, function(err, review) {
//             if (err)
//                 res.send(err);
 
//             // get and return all the reviews after you create another
//             Review.find(function(err, reviews) {
//                 if (err)
//                     res.send(err)
//                 res.json(reviews);
//             });
//         });
 
//     });

//     // delete a review
//     app.delete('/api/reviews/:review_id', function(req, res) {
//         Review.remove({
//             _id : req.params.review_id
//         }, function(err, review) {

//         });
//     });

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");