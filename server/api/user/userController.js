const validateInput = require('../../helpers/validateInput');

exports.register = (req, res) => {
    setTimeout(() => {
        const { errors, isValid } = validateInput(req.body);

        if (!isValid) {
            res.status(400).json(errors);
        } else {
            res.status(200).json({success: true});
        }
    }, 1000);
}