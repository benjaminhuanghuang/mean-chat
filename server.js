const mongo = require("mongodb").MongoClient;
const client = require('socket.io').listen(3000).sockets;

mongo.connect('mongodb://localhost/mongochat', (err, db)=>{
    if(err){
        throw err;
    }
    client.on('connection', (socket)=>{
        
    });
});
