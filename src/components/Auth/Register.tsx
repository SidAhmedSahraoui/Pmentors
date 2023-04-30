import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Actions
import { register, clearErrors } from '../../redux/actions/authActions';

import useStyles from './auth-jss';
import Link from "next/link";
import toast, {Toaster} from "react-hot-toast";
import GoogleLogin from "react-google-login";
// @ts-ignore
import FacebookLogin from 'react-facebook-login';
import { faFacebook} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFlaskVial} from "@fortawesome/free-solid-svg-icons";

const Register = (props: any) => {
    const {
        isAuthenticated,
        error,
        loading,
        register,
        clearErrors,
        setAlert,
    } = props;

    const classes = useStyles();

    const [user, setUser] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
        password2: '',
    });

    const { username, phone, email, password, password2 } = user;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, [e.target.name]: e.target.value });

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }

        // eslint-disable-next-line
    }, [isAuthenticated, props.history]);

    useEffect(() => {
        if (error) {
            if (typeof error === 'object') {
                if (error.errors && error.errors.length > 0) {
                    error.errors.forEach((err:any) => {
                        toast(err.msg);
                        clearErrors();
                    });
                }
            } else {
                toast(error);
                clearErrors();
            }
        }

        // eslint-disable-next-line
    }, [error]);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (username === '' || phone === '' || email === '' || password === '') {
            toast.error('Veuillez remplir tous les champs');
        } else if (password.length < 8) {
            toast.error('Le mot de passe doit contenir au moins 8 caractères');
        } else if (password !== password2) {
            toast.error('Les mots de passe ne sont pas les même');
        } else {
            // Register function
            await register({ username, phone, email, password });
        }
    };

    const customResponse = () => {
        toast('Social auth is not available yet!',
            {
                icon: '👏',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
    }

    return (
        <>
            <div className={`${classes.root} card-shadow text-center`}>
                <Toaster/>

                <h3 className='title'>Creer un compte</h3>
                <div className="social py-4">
                    <GoogleLogin
                        className="!rounded-lg"
                        clientId="865137569538-2k4mc40dur78flg8p1ncbu39h9n1tjtr.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={customResponse}
                        onFailure={customResponse}
                    />
                    {/*<FacebookLogin
                        appId=""
                        autoLoad={false}
                        fields="name,email,picture"
                        onClick={customResponse}
                        callback={customResponse()}
                        cssClass="btnFacebook"
                        textButton="&nbsp;&nbsp;Sign In with Facebook"
                        icon={<FontAwesomeIcon icon={faFacebook} className="h-8 w-8"/>}
                    />*/}
                </div>
                <h6 className='subtitle'>Ou bien</h6>

                <form className='mt-4' onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            className='input-text'
                            type='text'
                            name='username'
                            value={username}
                            placeholder='Username'
                            onChange={onChange}
                            // required
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            className='input-text'
                            type='text'
                            name='phone'
                            value={phone}
                            placeholder='Phone'
                            onChange={onChange}
                            // required
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            className='input-text'
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Email'
                            onChange={onChange}
                            // required
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            className='input-text'
                            type='password'
                            name='password'
                            value={password}
                            placeholder='Password'
                            onChange={onChange}
                            // required
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            className='input-text'
                            type='password'
                            name='password2'
                            value={password2}
                            placeholder='Password confirmation'
                            onChange={onChange}
                            // required
                        />
                    </div>

                        <input
                            type='submit'
                            value='Register'
                            className='inline-block cursor-pointer rounded-2xl w-auto border bg-blue-one shadow-[inset_0_-5px_0_0_rgb(0_0_0_/_8%),0_4px_4px_0_rgb(0_0_0_/_4%)] text-white py-2 px-4 mt-4 mb-4 border-solid border-[rgba(56,56,56,0.08)]'

                        />

                </form>

                <p className='form-link mt-3 cursor-pointer	'>
                    J’ai déja un compte?{' '}
                    <Link href='/login'>
                        <span>Connexion.</span>
                    </Link>
                </p>
            </div>
        </>
    );
};


const mapSateToProps = (state:any) => ({
    error: state.auth.error,
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
});

export default connect(mapSateToProps, { register, clearErrors })(
    Register
);
