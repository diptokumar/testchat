//external import
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
//internal import
const {notFoundHandler, defaultErrorHandler} = require('./middlewares/common/errorhandler');
const loginrouter = require('./routers/loginrouter');
const userrouter = require('./routers/userrouter');
const inboxrouter = require('./routers/inboxrouter');


const app = express();
dotenv.config();
//database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connection successful');
}).catch((err)=>{
    console.log(err.message);
});
//request parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//view engine
app.set('view engine', 'ejs');
//public template
app.use(express.static(path.join(__dirname, 'public')));
//cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

//router Handler
app.use('/', loginrouter );
app.use('/inbox', inboxrouter );
app.use('/users', userrouter );
//error Handler
//404 not found handler
app.use(notFoundHandler);
//common custom error handler
app.use(defaultErrorHandler);

app.listen(process.env.PORT,()=>{
    console.log('Server connection successful');
})