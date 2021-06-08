
function getUsers(req, res, next){
    res.render('users', {
        title: 'Chat Application'
    })
}

module.exports = getUsers;