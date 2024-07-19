import React, { useState } from 'react';
import Img1 from './../../assets/images/auth/auth/auth-img.png';
import Img2 from './../../assets/images/auth/logo.png';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { LoginAPI } from '../../API/auth/register';
import { toast } from 'react-toastify';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNo: '',
    });

    const [agree, setAgree] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setAgree(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (!agree) {
            toast.error('You must agree to the terms and conditions');
            return;
        }

        const { name, username, gender, email, password, phoneNo } = formData;
        const result = await LoginAPI({ name, username, gender, email, password, phoneNo });

        if (result.error) {
            toast.error(result.error);
        } else {
            toast.success('Registration successful!');
        }
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
                            <h4 className="mb-12">Sign Up to your Account</h4>
                            <p className="mb-32 text-secondary-light text-lg">Welcome back! please enter your detail</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="icon-field mb-16">
                                <span className="icon top-50 translate-middle-y">
                                    <PersonIcon />
                                </span>
                                <input
                                    type="text"
                                    className="form-control h-56-px bg-neutral-50 radius-12"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="icon-field mb-16">
                                <span className="icon top-50 translate-middle-y">
                                    <PersonIcon />
                                </span>
                                <input
                                    type="text"
                                    className="form-control h-56-px bg-neutral-50 radius-12"
                                    placeholder="Username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="icon-field mb-16">
                                <span className="icon top-50 translate-middle-y">
                                    <PersonIcon />
                                </span>
                                <input
                                    type="text"
                                    className="form-control h-56-px bg-neutral-50 radius-12"
                                    placeholder="Gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="icon-field mb-16">
                                <span className="icon top-50 translate-middle-y">
                                    <EmailIcon />
                                </span>
                                <input
                                    type="email"
                                    className="form-control h-56-px bg-neutral-50 radius-12"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="icon-field mb-16">
                                <span className="icon top-50 translate-middle-y">
                                    <HttpsIcon />
                                </span>
                                <input
                                    type="password"
                                    className="form-control h-56-px bg-neutral-50 radius-12"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="icon-field mb-16">
                                <span className="icon top-50 translate-middle-y">
                                    <HttpsIcon />
                                </span>
                                <input
                                    type="password"
                                    className="form-control h-56-px bg-neutral-50 radius-12"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="icon-field mb-16">
                                <span className="icon top-50 translate-middle-y">
                                    <PersonIcon />
                                </span>
                                <input
                                    type="text"
                                    className="form-control h-56-px bg-neutral-50 radius-12"
                                    placeholder="Phone Number"
                                    name="phoneNo"
                                    value={formData.phoneNo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-20 d-flex align-items-center">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={agree}
                                            onChange={handleCheckboxChange}
                                            inputProps={{ 'aria-label': 'Agree to terms and conditions' }}
                                        />
                                    }
                                    label={
                                        <span className="text-sm">
                                            By creating an account means you agree to the
                                            <a href="javascript:void(0)" className="text-primary-600 fw-semibold"> Terms & Conditions</a> and our
                                            <a href="javascript:void(0)" className="text-primary-600 fw-semibold"> Privacy Policy</a>
                                        </span>
                                    }
                                />
                            </div>
                            <button type="submit" className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32">
                                Sign Up
                            </button>
                            <div className="mt-32 center-border-horizontal text-center">
                                <span className="bg-base z-1 px-4">Or sign up with</span>
                            </div>
                            <div className="mt-32 d-flex align-items-center gap-3">
                                <button
                                    type="button"
                                    className="fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50"
                                >
                                    <iconify-icon icon="ic:baseline-facebook" className="text-primary-600 text-xl line-height-1"></iconify-icon>
                                    Facebook
                                </button>
                                <button
                                    type="button"
                                    className="fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50"
                                >
                                    <iconify-icon icon="logos:google-icon" className="text-primary-600 text-xl line-height-1"></iconify-icon>
                                    Google
                                </button>
                            </div>
                            <div className="mt-32 text-center text-sm">
                                <p className="mb-0">Already have an account? <a href="sign-in.html" className="text-primary-600 fw-semibold">Sign In</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;
