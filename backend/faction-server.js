const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
//const cors = require('cors');
const env = require('dotenv').config();
const { introspectionFromSchema } = require('graphql');
const mongoose = require('mongoose');

const host = process.env.MDBHOST
const mongo_port = process.env.MDBPORT
const db = process.env.MDB

//DB connection assmues authentication required
const user = process.env.USER
const pw = process.env.PW

const router = express.Router();

mongoose.connect('mongodb://'+user+':'+pw+'@'+host+mongo_port+'/'+db+'?authSource=admin');
console.log('Connected to '+db+' database on port '+mongo_port+'!');

//Faction Schema
const factionSchema = new mongoose.Schema({
  faction: String,
  theater: String,
  category: String,
  tier: Number,
  hold: String,
  rep: Number,
  notes: String,
  is_player: Boolean
})

//Faction Model
const Factions = mongoose.model('factions', factionSchema);

const app = express();
const express_port = 30600;

//app.use(cors());
//app.options('*', cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
app.use("/", router);

router.route("/getData").get(function(req, res) {
  Factions.find({ faction: 'Scholasticate' }, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(express_port, () => {
  console.log(`Express server started, listening at http://localhost:${express_port}`)
})