const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Station = require('./models/station');
const User = require('./models/user');

dotenv.config();

let env = `${process.env.NODE_ENV}`;
env = process.env.NODE_ENV || 'TEST';
let envString = env.toUpperCase();

// Connection to mongoDB
const uri = `${process.env[`MONGOOSE_DB_${envString}`]}`;

mongoose.set('useFindAndModify', false);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
const connection = mongoose.connection;

connection.on('error', () => {
  console.log('Error Connecting To Database');
});

connection.once('open', () => {
  console.log('Connected Successfully');
});

const allSeeds = [
  new Station({
    _id: '5dd5ce795ffd15bbb1a7e94c',
    name: 'International Space Station',
    type: 'MAN-MADE',
    orbit: 'earth'
  }),

  new Station({
    _id: '5dd5ce795ffd15bbb1a7e94b',
    name: 'Abuja',
    type: 'NATURAL',
    orbit: 'earth'
  }),
  new User({
    _id: '5dd5ce795ffd15bbb1a7e94c',
    firstname: 'Adedayo',
    lastname: 'adedunye',
    balance: 3005,
    username: 'samfeolu'
  }),
  new User({
    _id: '5dd5ce795ffd15bbb1a7e94b',
    firstname: 'Adedayo',
    lastname: 'adedunye',
    balance: 3005,
    username: 'adedayojs'
  })
];

async function seed() {
  await mongoose.connection.dropDatabase();

  let counter = 0;
  for (let index = 0; index < allSeeds.length; index++) {
    //Saving each Section to database
    allSeeds[index].save((error, _result) => {
      if (error) {
        console.log(error);
      }

      counter++;
      if (counter === allSeeds.length) {
        //Disconnect if this is the last seed
        mongoose.disconnect();
      }
    });
  }
}
seed();
