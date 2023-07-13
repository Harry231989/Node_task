const mongoose = require('mongoose');

// const connectionString =
//   'mongodb+srv://TheGreat:TheGreat@cluster0.aqniles.mongodb.net/?retryWrites=true&w=majority';

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

// const mongoose = require('mongoose');

// const connectDB = (url) => {
//   return mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

// module.exports = connectDB;
