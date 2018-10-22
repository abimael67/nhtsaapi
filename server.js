require('./config/envVariables')
let express = require('express')
let bodyParser = require('body-parser')
const vehicleRouter = require('./routes/vehicleRoute')

let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', ((req,res)=> res.send('Welcome to NHTSA API')))
app.use("/vehicles", vehicleRouter);
module.exports = app