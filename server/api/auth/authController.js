const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');

exports.login = (req, res) => {
    const { identifier, password } = req.body;

    User.findUser(identifier)
    .then((user) => {
        if (bcrypt.compareSync(password, user[0].get('password_digest'))) {
            const token = jwt.sign({foo: 'bar'}, 'shhhhhh');
            console.log(token);
        
        } else {
            res.status(401).json({errors: {form: 'Invalid Credentials'}});
        }
    })
    .catch((err) => {
        res.status(401).json({errors: {form: 'Invalid Credentials'}});
    });
}