var mongoose = require('mongoose');
var dbIp = '45.55.251.63';

mongoose.connect('mongodb://' + dbIp + '/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', function(){
    console.log('Mongo connected at', dbIp);
});