import {yupResolver} from '@hookform/resolvers/yup'
import { PropTypes } from 'prop-types'
import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import InputField from '../../FormControl'
import { Avatar, Button, Grid, Link, Typography} from '@mui/material'
import LockOutlined from '@mui/icons-material/LockOutlined'
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
    console.log("Captcha value:", value);
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    // const classes = useStyles();
    const schema=yup.object().shape({
        username: yup.string().required('Invalid name').min(1, 'Type your username'),
        email: yup.string().email('Invalid email').required('Type your email'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Type your password'),
        confpassword: yup.string().oneOf([yup.ref('password'), null], 'Password is not same').required('Check your password again'),
    })
    const form 
        = useForm({
        defaultValues:{
            username:'',
            email:'',
            password:'',
            confpassword:'',
        },
        resolver: yupResolver(schema),
    });
    const submitHandler= async(values)=>{
        const {onSubmit}= props;
        if (onSubmit){
            try{
                await onSubmit(values);
            } catch(error){
                console.error('Error submitting form: ', error);
            }
        }
        form.reset();
    }
    return (
        <Grid className='root'>
            <Avatar className='avatar' sx={{margin: '0 auto', bgcolor:'primary.main'}}>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography className='title' component="h3" variant="h5" mt={2}>
                SIGN UP
            </Typography>
            <form onSubmit={form.handleSubmit(submitHandler)}>
                <InputField name="username" id="username" label ="Username" form={form} xs={12}/>
                <InputField name="email" id="email" label ="Email" form={form} xs={12}/>
                <InputField name="password" id="password" label ="Password" form={form} type='password' autoComplete="new-password" fullWidth/>
                <InputField name="confpassword" id="confpassword" label ="Confirm Password" form={form} xs={12} type='password' autoComplete="new-password"/>
                <ReCAPTCHA
                    sitekey="6LcwUuIpAAAAAP5exrLgJ2kLifehAsnh-OwkT9g0"
                    onChange={onChange}
                />
                <Button variant='contained' color='primary' fullWidth sx={{ mt: 3, mb: 2 }} type='submit'>Sign up</Button>
                <Link href="/signin" variant="body2">
                    Account already? Sign in
                </Link>
            </form>
        </Grid>
    );
}

export default RegisterForm;
