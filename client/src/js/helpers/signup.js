import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default (data) => {
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