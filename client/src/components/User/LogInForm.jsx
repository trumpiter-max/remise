import React from 'react';
import { useForm } from 'react-hook-form';

LogInForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LogInForm(props) {
    // const classes = useStyles();
    const schema=yup.object().shape({
        email: yup.string().email('Invalid email').required('Please enter your email'),
        password: yup.string().min(6, 'Password must be at lease 6 characters'),
    })
    const form 
        = useForm({
        defaultValues:{
            email:'',
            password:'',
        },
        resolver: yupResolver(schema),
    });
    const submitHandler= async(values)=>{
        const {onSubmit}= props;//??sao bỏ
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
            <Typography className='title' component="h3" variant="h5">
                Sign Up
            </Typography>
            <form onSubmit={form.handleSubmit(submitHandler)}>
                <InputField name="email" id="email" label ="Email" form={form} xs={12}/>
                <InputField name="password" id="password" label ="Password" form={form} type='password' autoComplete="new-password" fullWidth/>
                <Button variant='contained' color='primary' fullWidth sx={{ mt: 3, mb: 2 }} type='submit'>Sign Up</Button>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
            </form>
        </Grid>
    );
}

export default LogInForm;
