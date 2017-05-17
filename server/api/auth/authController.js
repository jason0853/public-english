const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const config = require('../../config');

exports.login = (req, res) => {
    const { identifier, password } = req.body;

    User.findUser(identifier)
    .then((user) => {
        if (bcrypt.compareSync(password, user[0].get('password_digest'))) {
            console.log(user[0])
            const token = jwt.sign({
                id: user[0].get('_id'),
                username: user[0].get('username')
            }, config.jwtSecret);
            
            res.json({ token });
        
        } else {
            res.status(401).json({errors: {form: 'Invalid Credentials'}});
        }
    })
    .catch((err) => {
        res.status(401).json({errors: {form: 'Invalid Credentials'}});
    });
}