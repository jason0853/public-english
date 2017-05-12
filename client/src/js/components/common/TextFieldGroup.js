import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Message } from 'semantic-ui-react';

const TextFieldGroup = ({label, type, placeholder, name, value, onChange, error}) => {
    return (
        <div className={classnames('form-group', { 'error': error  })}>
            <label>{label}</label>
            <input 
                type={type} 
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error && <Message size="mini" color="red">{error}</Message>}
        </div>
    );
};

TextFieldGroup.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

TextFieldGroup.defaultProps = {
    type: 'text'
}


export default TextFieldGroup;