const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/";  // Ensure MongoDB is running on this URL

const connecttoMongo = () => {
    mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDB successfully!");
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err);
        });
};

module.exports = connecttoMongo;
