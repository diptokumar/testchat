
function getInbox(req, res, next){
    res.render('inbox', {
        title: 'Chat Application'
    })
}

module.exports = getInbox;