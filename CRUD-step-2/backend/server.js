import express from 'express';

import mongodb from 'mongodb';

const app = express();// instantiate express
const dbUrl = 'mongodb://localhost/crudwithredux';

mongodb.MongoClient.connect(dbUrl, function(err, db){

	app.get('/api/games', function(req, res) {
		db.collection('games').find({}).toArray((err, games) => {
			res.json({ games });
		})
	});

//moved server into DB connection. So first we connect to DB and then run the function
// in step 1 server sits outside the db initialisation.
app.listen(8078, () => console.log('Server is running on localhost: 8078'))

})
