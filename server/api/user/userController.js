const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.username)) {
        errors.username = 'Username is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if (Validator.isEmpty(data.passwordConfirm)) {
        errors.passwordConfirm = 'Password confirm is required';
    }

    if (!Validator.equals(data.password, data.passwordConfirm)) {
        errors.passwordConfirm = 'Passwords must match!';
    }

    if (Validator.isEmpty(data.language)) {
        errors.language = 'Language is required';
    }
   
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

exports.register = (req, res) => {
    const { errors, isValid } = validateInput(req.body);

    if (!isValid) {
        res.status(400).json(errors);
    } else {
        res.status(200).json({success: true});
    }
    
}