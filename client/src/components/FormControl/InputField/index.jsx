import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form:PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const {form, name, label, disabled, width, marginRight,...rest}=props;
    // const [value, setValue]=useState('');
    return (
        <Controller
            name={name}
            control={form.control}
            render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            }) => (
            <TextField
            margin='normal'
            label={label}
            value={value}
            onChange={onChange} // send value to hook form
            onBlur={onBlur} // notify when input is touched
            inputRef={ref} // wire up the input ref
            sx={{width:width, mr:marginRight}}
            {...rest} // Truyền các thuộc tính bổ sung
            fullWidth
            />)}
        />
    );
}

export default InputField;