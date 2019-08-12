const express = require('express');
const massive = require('massive');
const cors = require('cors');


massive({
	host: 'localhost',
	port: 5432,
	database: 'appdb',
	user: 'postgres',
	password: 'appdb'
}).then(db => {
	const app = express();

/// ---- Middleware ---- ///
	app.set('db', db);
	app.use(express.json());
	app.use(cors());

/// ---- commands here ---- ///


	const PORT = 3001;
	app.listen(PORT, ()=> { console.log(`Server now live  @ ${PORT} (▀̿Ĺ̯▀̿ ̿) `) })

})

