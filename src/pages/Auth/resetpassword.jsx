import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Img1 from './../../assets/images/auth/auth/auth-img.png';
import Img2 from './../../assets/images/auth/logo.png';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { ResetPasswordAPI } from "./../../API/auth/resetpassword";

const ResetPassword = () => {
    const { token } = useParams(); // Get the token from the URL
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            setOpenSnackbar(true);
            return;
        }
        const response = ResetPasswordAPI({token, newPassword})
        if (response.status === 200) {
            setSuccessMessage(response.data.message);
            setOpenSnackbar(true);
            setTimeout(() => {
                navigate('/login');
            }, 5000);
        } else {
            setError(response.data.message);
            setOpenSnackbar(true);
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
                        <img src={Img1} alt="" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
                    <div className="max-w-464-px mx-auto w-100">
                        <div>
                            <a href="index.html" className="mb-40 max-w-290-px">
                                <img src={Img2} alt="" style={{ width: '100px' }} />
                            </a>
                            <h4 className="mb-12">Reset Your Password</h4>
                            <p className="mb-32 text-secondary-light text-lg">Enter your new password below.</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="icon-field mb-16">
                                {/* <span className="icon top-50 translate-middle-y">
                                    <HttpsIcon />
                                </span> */}
                                <TextField
                                    fullWidth
                                    label="New Password"
                                    type={showPassword ? "text" : "password"}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    margin="normal"
                                    required
                                    InputProps={{
                                        endAdornment: (
                                            <span className="toggle-password position-absolute end-0 top-50 translate-middle-y me-16 cursor-pointer" onClick={handlePasswordToggle}>
                                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </span>
                                        )
                                    }}
                                />
                            </div>
                            <div className="icon-field mb-16">
                                {/* <span className="icon top-50 translate-middle-y">
                                    <HttpsIcon />
                                </span> */}
                                <TextField
                                    fullWidth
                                    label="Confirm Password"
                                    type={showPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    margin="normal"
                                    required
                                    InputProps={{
                                        endAdornment: (
                                            <span className="toggle-password position-absolute end-0 top-50 translate-middle-y me-16 cursor-pointer" onClick={handlePasswordToggle}>
                                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </span>
                                        )
                                    }}
                                />
                            </div>
                            {error && <Alert severity="error">{error}</Alert>}
                            {successMessage && <Alert severity="success">{successMessage}</Alert>}
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Reset Password
                            </Button>
                        </form>
                        {/* back to login  */}
                        <div className="mt-32 text-center text-sm">
                            <p className="mb-0">Remember your password? <a href="/login" className="text-primary-600 fw-semibold">Sign In</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
                    {error || successMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default ResetPassword;
