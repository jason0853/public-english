const validateInput = require('../../helpers/validateInput');

exports.register = (req, res) => {
    
    const { errors, isValid } = validateInput(req.body);

    if (isValid) {
        res.status(200).json({success: true});
    } else {
        res.status(400).json(errors);
    }
}