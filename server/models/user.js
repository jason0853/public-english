const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password_digest: String,
    language: String
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

userSchema.statics.createUser = function(user) {
    return this.create(user);
}

userSchema.statics.findUser = function(user) {
    return this.find({ $or: [{ 'username': user }, { 'email': user }] });
}

const User = mongoose.model('User', userSchema);

module.exports = User;