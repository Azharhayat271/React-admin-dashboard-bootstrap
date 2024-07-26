import React, { useState } from 'react';
import Img1 from "./../../assets/images/auth/auth/auth-img.png";
import Img2 from "./../../assets/images/auth/logo.png";
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { LoginAPI } from '../../API/auth/login';
import { Link, useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { TextField, IconButton, InputAdornment, Button, Box, Typography, Container } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await LoginAPI({ email, password });
        if (response.error) {
            setError(response.error);
            setOpenSnackbar(true);
        } else {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('name', response.data.user.name);
            localStorage.setItem('role', response.data.user.role);
            localStorage.setItem('image', response.data.user.image);
            localStorage.setItem('rememberMe', rememberMe);

            navigate('/newDashboardDesign');
        }
    };

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
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
                    <Container maxWidth="sm">
                        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={Img2} alt="Logo" style={{ marginBottom: '40px', maxWidth: '290px' }} />
                            <Typography component="h1" variant="h5">Sign In to your Account</Typography>
                            <Typography variant="body2" color="textSecondary" align="center">Welcome back! Please enter your details</Typography>
                            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    color="success"
                                    type="email"
                                    name="email"
                                    label="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    color="success"

                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    label="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <HttpsIcon />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handlePasswordToggle}>
                                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    margin="normal"
                                    required
                                />
       <div style={{ display: 'flex', alignItems: 'center' }}>
    <FormControlLabel
        style={{ marginRight: '10px' }}
        control={
            <Checkbox
                checked={rememberMe}

                onChange={() => setRememberMe(!rememberMe)}
                name="remember"
                color="primary"
            />
        }
        label="Remember me"
        sx={{ mt: 2 }}
    />
    <Box sx={{marginLeft: '30%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <Link to="/forget-password" className="text-primary-600 fw-medium">Forgot Password?</Link>
    </Box>
</div>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    color="success"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
                                    Don’t have an account? <Link to="/register" className="text-primary-600 fw-semibold">Sign Up</Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </div>
            </section>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Login;
