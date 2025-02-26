const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User schema definition
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now
    }
});

// Ensure the model is only defined once
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;
