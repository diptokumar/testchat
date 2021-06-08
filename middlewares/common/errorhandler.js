const createError = require('http-errors');

//404 not found handler
function notFoundHandler(req, res, next) {
    next(createError(404, 'your request was not found at this moment'));
}

//default error handler

function defaultErrorHandler(err, req, res, next) {
    res.locals.error = process.env.NODE_ENV === 'development'? err : {message: err.message};
    res.status(err.status || 500);  
    if (res.locals.html) {
        res.render("error",{
            title: 'Error page'
        })
    }else {
        res.json(res.locals.error);
    }

}

module.exports = {notFoundHandler, defaultErrorHandler};