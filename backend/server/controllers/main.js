const jwt = require('jsonwebtoken');
const secret = require('./secret');

function authenticate(req, res, next){
	if ((req.originalUrl === '/api/login') || (req.originalUrl =='/api/user')){
	}else{
		console.log(`¯\_(ツ)_/¯ Checking in ---> ${req.originalUrl}`);
		if (!req.headers.authorization){
			res.status(401).end();
		}

		try {
			const token = req.headers.authorization.split(' ')[1];
			jwt.verify(token, secret);
			res.status(200).json({ msg: 'Access Granted!'})
		} catch(err){
			console.error(err);
			return res.status(401).end();
		}
	}
	next();
}

module.exports = authenticate();