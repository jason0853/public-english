const bcrypt = require('bcrypt');

const validateInput = require('../../helpers/validateInput');
const User = require('../../models/user');

exports.register = (req, res) => {
    
    const { errors, isValid } = validateInput(req.body);

    if (isValid) {
        const { username, email, password, language } = req.body;
        const password_digest = bcrypt.hashSync(password, 10);

        User.createUser({username, email, password_digest, language})
        .then((user) => {
            res.json({ success: true });
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
    } else {
        res.status(400).json(errors);
    }
}