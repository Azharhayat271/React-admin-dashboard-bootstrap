import React, { useState } from 'react';
import Img1 from './../../assets/images/auth/auth/auth-img.png';
import Img2 from './../../assets/images/auth/logo.png';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useFormik } from 'formik';
import { SignupSchema } from '../../utils/fieldvalidator/yupvalidation';
import { LoginAPI } from '../../API/auth/register';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Select, MenuItem, InputLabel, FormControl, Button, Box, Container, Typography } from '@mui/material';

const Signup = () => {
    const [agree, setAgree] = useState(false);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            gender: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNo: '',
        },
        validationSchema: SignupSchema,
        onSubmit: async (values) => {
            if (!agree) {
                setMessage('You must agree to the terms and conditions');
                setSeverity('error');
                setOpen(true);
                return;
            }

            try {
                const { name, username, gender, email, password, phoneNo } = values;
                const result = await LoginAPI({ name, username, gender, email, password, phoneNo });

                if (result.error) {
                    setMessage(result.error || 'An error occurred');
                    setSeverity('error');
                } else {
                    setMessage('Registration successful!');
                    setSeverity('success');
                    setTimeout(() => {
                        navigate('/login');
                    }, 3000);
                }
            } catch (error) {
                console.error('API Error:', error);
                setMessage('An unexpected error occurred');
                setSeverity('error');
            } finally {
                setOpen(true);
            }
        },
    });

    const handleCheckboxChange = (e) => {
        setAgree(e.target.checked);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <section className="auth bg-base d-flex flex-wrap">
                <div className="auth-left d-lg-block d-none">
                    <div className="d-flex align-items-center flex-column h-100 justify-content-center">
                        <img src={Img1} alt="" />
                    </div>
                </div>
                <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
                    <div>
                        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px', width: '100%', mx: 'auto' }}>
                            <img src={Img2} alt="Logo" style={{ marginBottom: '40px', maxWidth: '290px' }} />
                            <Typography component="h1" variant="h5">
                                Sign Up
                            </Typography>
                            <Typography variant="body2" color="textSecondary" align="center">
                                Welcome back! please enter your details
                            </Typography>
                            <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    name="name"
                                    color="success"

                                    label="Name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    InputProps={{
                                        startAdornment: (
                                            <PersonIcon />
                                        ),
                                    }}
                                    margin="normal"
                                />
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    color="success"

                                    name="username"
                                    label="Username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.username && Boolean(formik.errors.username)}
                                    helperText={formik.touched.username && formik.errors.username}
                                    InputProps={{
                                        startAdornment: (
                                            <PersonIcon />
                                        ),
                                    }}
                                    margin="normal"
                                />
                                <FormControl fullWidth variant="outlined" margin="normal" error={formik.touched.gender && Boolean(formik.errors.gender)}>
                                    <InputLabel color="success">Select Gender</InputLabel>
                                    <Select
                                        name="gender"
                                        color="success"

                                        value={formik.values.gender}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        label="Select Gender"

                                    >
                                        <MenuItem value=""><em>Select Gender</em></MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                    </Select>
                                    {formik.touched.gender && formik.errors.gender && <Typography color="error">{formik.errors.gender}</Typography>}
                                </FormControl>
                                <TextField
                                    variant="outlined"
                                    color="success"

                                    fullWidth
                                    type="email"
                                    name="email"
                                    label="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    InputProps={{
                                        startAdornment: (
                                            <EmailIcon />
                                        ),
                                    }}
                                    margin="normal"
                                />
                                <TextField
                                    variant="outlined"
                                    color="success"

                                    fullWidth
                                    type="password"
                                    name="password"
                                    label="Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    InputProps={{
                                        startAdornment: (
                                            <HttpsIcon />
                                        ),
                                    }}
                                    margin="normal"
                                />
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    color="success"
                                    type="password"
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                    InputProps={{
                                        startAdornment: (
                                            <HttpsIcon />
                                        ),
                                    }}
                                    margin="normal"
                                />
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    color="success"

                                    name="phoneNo"
                                    label="Phone Number"
                                    value={formik.values.phoneNo}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
                                    helperText={formik.touched.phoneNo && formik.errors.phoneNo}
                                    InputProps={{
                                        startAdornment: (
                                            <PersonIcon />
                                        ),
                                    }}
                                    margin="normal"
                                />
                                <FormControlLabel
                                    control={<Checkbox  checked={agree} onChange={handleCheckboxChange} color="success" />}
                                    label="I agree to the terms and conditions"
                                    sx={{ mt: 2 }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="error"
                                    sx={{ mt: 2, mb: 2 }}
                                >
                                    Register
                                </Button>

                                <Typography variant="body2" color="textSecondary" align="center">
                                    <Link to="/login">Already have an account? Login</Link>
                                </Typography>
                            </Box>
                        </Box>
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                                {message}
                            </Alert>
                        </Snackbar>
                    </div>
                </div>
            </section>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Signup;
