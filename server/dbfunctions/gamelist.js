const gamelist = () => {
	MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true, useUnifiedTopology: true},(err, client) => {
    	var db = client.db('playmaker');
    	db.collection('games').find().toArray().then(data => {            
		    response.end(JSON.stringify(data));
		    client.close();
    	})
    });
}
module.exports = gamelist;