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
                    <div className="max-w-464-px mx-auto w-100">
                        <div>
                            <a href="index.html" className="mb-40 max-w-290-px">
                                <img src={Img2} alt="" />
                            </a>
                            <h4 className="mb-12">Sign In to your Account</h4>
                            <p className="mb-32 text-secondary-light text-lg">Welcome back! please enter your detail</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="icon-field mb-16">
                                <span className="icon top-50 translate-middle-y">
                                    <EmailIcon />
                                </span>
                                <input
                                    type="email"
                                    className="form-control h-56-px bg-neutral-50 radius-12"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="position-relative mb-20">
                                <div className="icon-field">
                                    <span className="icon top-50 translate-middle-y">
                                        <HttpsIcon />
                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control h-56-px bg-neutral-50 radius-12"
                                        id="your-password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <span className="toggle-password position-absolute end-0 top-50 translate-middle-y me-16 cursor-pointer" onClick={handlePasswordToggle}>
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between gap-2">
                                <div className="form-check style-check d-flex align-items-center">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={rememberMe}
                                                onChange={() => setRememberMe(!rememberMe)}
                                                name="remember"
                                                color="primary"
                                            />
                                        }
                                        label="Remember me"
                                    />
                                </div>
                                <Link to="/forget-password" className="text-primary-600 fw-medium">Forgot Password?</Link>
                            </div>
                            <button type="submit" className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32">Sign In</button>
                            {/* <div className="mt-32 center-border-horizontal text-center">
                                <span className="bg-base z-1 px-4">Or sign in with</span>
                            </div>
                            <div className="mt-32 d-flex align-items-center gap-3">
                                <button type="button" className="fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50">
                                    <iconify-icon icon="ic:baseline-facebook" className="text-primary-600 text-xl line-height-1"></iconify-icon>
                                    Google
                                </button>
                                <button type="button" className="fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50">
                                    <iconify-icon icon="logos:google-icon" className="text-primary-600 text-xl line-height-1"></iconify-icon>
                                    Google
                                </button>
                            </div> */}
                            <div className="mt-32 text-center text-sm">
                                <p className="mb-0">Don’t have an account? <Link to="/register" className="text-primary-600 fw-semibold">Sign Up</Link></p>
                            </div>
                        </form>
                    </div>
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
