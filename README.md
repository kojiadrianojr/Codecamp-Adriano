🐶 --> Dependencies  
🦴 --> Commands
👵 --> Reminders



👵 --- Requirement --- 👵
🐶 sqltabs
🐶 Nodemon
🐶 Nodejs
🐶 git
🐶 nps -npm tool

//open package.json and this to script
🦴 "migrate": "node-pg-migrate"

👵 ------------------- 👵

👵 setup docker-compose.yml
👵 create a file config/default.json 


BACKEND
__________________________________________________________
// Track dependencies
🦴 npm init -y 

//Dockerjs
🐶 npm install docker --save

//Expressjs
🐶 npm install express --save

//Migrations
🐶 npm install node-pg-migrate pg --save
🦴 npm run migrate (up/down)
🦴 npm run migrate create [tablename] -> creating table

//argon2
🐶 npm install argon2 --save

//massivjs
🐶 npm install massive --save

//jwt
🐶 npm install --save jsonwebtoken

//cors
🐶 npm install cors --save 

