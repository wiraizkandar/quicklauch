const mongoose = require("mongoose");
const Users = require('../models/users.model');

exports.index = function (req, res) {
    res.render('user');
};

exports.store = function (req, res, next) {
    let users = new Users(
        {
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            username: req.body.username
        }
    );

    users.save(function (err) {
        console.log(err);
        if (err) {
            return next(err);
        }
        res.send('User Create successfully')
    })
};

exports.show = function(req, res, next){
    Users.find({}, function(err, users) {
        res.send(users);
     });
}

exports.getUserByID = function(req, res, next){
    Users.findById(req.params.id, function (err, users) {
        if (err) return next(err);
        res.send(users);
    })
}

exports.delete = function(req, res, next){
    Users.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
}

exports.update = function(req, res, next){
    Users.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User udpated.');
    });
}
