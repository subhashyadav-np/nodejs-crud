const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users').then(function(response){
        res.render('index', {users:response.data});
    }).catch(err => {
        response.send(err);
    }) 
}

exports.newUserRoute = (req,res) => {
    res.render('newUser');
}

exports.updateUserRoute = (req,res) => {
    axios.get('http://localhost:3000/api/users', {params: {id:req.query.id}})
        .then(function(userData) {
            res.render('updateUser', {user: userData.data});
        })
        .catch(err => {
            res.send(err);
        })
}