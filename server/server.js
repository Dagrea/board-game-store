const http = require("http");
const fs = require("fs");
var MongoClient = require('mongodb').MongoClient;
const gamelist = require('./dbfunctions/gamelist.js');

http.createServer(function(request, response){   
    if (request.method === 'GET') {
        let filePath = __dirname+"/../build/index.html";
        if (request.url.substr(1,6) == "static") {
            filePath = __dirname+"/../build/"+request.url.substr(1);
        }
        fs.readFile(filePath, function(error, data){            
            if(error){     
            console.log(filePath);  
                response.statusCode = 404;
                response.end("Resourse not found!");
            }   
            else{
                response.end(data);
            }
        });
    }
    if (request.method === 'POST') {
        switch (request.url.substr(1)) {
            case 'gamelist':
                MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true, useUnifiedTopology: true},(err, client) => {
                    var db = client.db('playmaker');
                    db.collection('games').find().toArray().then(data => {
                        response.end(JSON.stringify(data));
                        client.close();
                    })
                });break;
            case 'game':
                var body = '';
                request.on('data', function(data) {
                body += data;
                body = body.slice(0,-2).substr(7);
                MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true, useUnifiedTopology: true},(err, client) => {
                    var db = client.db('playmaker');
                    db.collection('games').find({"product_id":body}).toArray().then(data => {
                        response.end(JSON.stringify(data));
                        client.close();
                    })
                });});break;
            case 'registration':
                var body = '';
                request.on('data', function(data) {
                    body += data;
                    body = JSON.parse(body);
                    MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true, useUnifiedTopology: true},(err, client) => {
                        if(err) {console.log(err);response.end(err);}
                        var db = client.db('playmaker');
                        db.collection('users').insertOne({"login": body.login,
                        "password": body.password,"fullname": body.fullname,"email": body.email,
                        "phone": body.phone, "city": body.city, "address": body.address}).then(data => {
                        response.end("Succes");
                        client.close();
                    })
                    });});break;
            case 'authorization':
                var body = '';
                request.on('data', function(data) {
                    body += data;
                    body = JSON.parse(body);
                    MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true, useUnifiedTopology: true},(err, client) => {
                        if(err) {console.log(err);response.end(err);}
                        var db = client.db('playmaker');
                        db.collection('users').findOne({"login": body.login,
                        "password": body.password}).then(data => {
                        response.end(JSON.stringify(data));
                        client.close();
                    })
                    });});break;
            case 'accountchanges':
                var body = '';
                request.on('data', function(data) {
                    body += data;
                    body = JSON.parse(body);
                    console.log(body);
                    MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true, useUnifiedTopology: true},(err, client) => {
                        if(err) {console.log(err);response.end(err);}
                        var db = client.db('playmaker');
                        db.collection('users').updateOne({"login": body.login}, {$set: 
                        {"password": body.password,"fullname": body.fullname,
                        "email": body.email, "phone": body.phone, "city": body.city, 
                        "address": body.address}}).then(data => {response.end("Succes");
                        client.close();
                    })
                    });});break;
            case 'addOrder':
                var body = '';
                request.on('data', function(data) {
                    body += data;
                    body = JSON.parse(body);
                    MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true, useUnifiedTopology: true},(err, client) => {
                        if(err) {console.log(err);response.end(err);}
                        var db = client.db('playmaker');
                        db.collection('orders').insertOne({"order_status": "new",
                        "date": formatDate(new Date()),"full_price": body.full_price,
                        "full_name": body.FIO, "city": body.city, "address": body.address,
                        "email": body.email, "phone": body.phone, "goods": body.games}).then(data => {
                        response.end("Succes");                        
                        client.close();
                    });
                    });});break;
            case 'message':
                var body = '';
                request.on('data', function(data) {
                    body += data;
                    body = JSON.parse(body);
                    MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true, useUnifiedTopology: true},(err, client) => {
                        if(err) {console.log(err);response.end(err);}
                        var db = client.db('playmaker');
                        db.collection('messages').insertOne({"fullname": body.fullname,
                            "email": body.email, "theme": body.theme, "message": body.message
                        }).then(data => {
                        response.end("Succes");                        
                        client.close();
                    });
                    });});break;
            default:
                console.log('post another shit | '+request.body);
        }
        
    };
}).listen(3000, function(){
    console.log("Server started at 3000");
});

function formatDate(date) {
    let yy = date.getFullYear() % 100;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    let hours = date.getHours(date);
    let min = date.getMinutes(date);
    return dd + '.' + mm + '.' + yy + " " + hours + ":" + min;
}
