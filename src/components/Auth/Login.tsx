import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Actions
import { login } from '../../redux/actions/authActions';

import useStyles from './auth-jss';
import Link from "next/link";
import toast, {Toaster} from "react-hot-toast";
import GoogleLogin from "react-google-login";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

const Login = (props:any) => {
    const {
        isAuthenticated,
        error,
        loading,
        login,
        clearErrors,
        setAlert,
    } = props;

    const classes = useStyles();

    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const { username, password } = user;

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, [e.target.name]: e.target.value });

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }

        // eslint-disable-next-line
    }, [isAuthenticated, props.history]);

    useEffect(() => {
        if (error) {
            setAlert(error);
            clearErrors();
        }

        // eslint-disable-next-line
    }, [error]);

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (username === '' || password === '') {
            toast.error('Please enter all fields');
        } else {
            login({ username, password });
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
                <Toaster />
                <h3 className='title'>Sign in</h3>
                <div className="social py-4">
                    <GoogleLogin
                        className="!rounded-lg"
                        clientId="865137569538-2k4mc40dur78flg8p1ncbu39h9n1tjtr.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={customResponse}
                        onFailure={customResponse}
                    />
                </div>
                <h6 className='subtitle'>Ou bien.</h6>

                <form className='mt-4' onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            className='input-text'
                            type='text'
                            name='username'
                            value={username}
                            placeholder='Username'
                            onChange={onChange}
                            required
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
                            required
                        />
                    </div>
                    <input
                        type='submit'
                        value='Login'
                        className='inline-block cursor-pointer rounded-2xl w-auto border bg-blue-one shadow-[inset_0_-5px_0_0_rgb(0_0_0_/_8%),0_4px_4px_0_rgb(0_0_0_/_4%)] text-white py-2 px-4 mt-4 mb-4 border-solid border-[rgba(56,56,56,0.08)]'

                    />

                </form>

                <p className='form-link mt-3 cursor-pointer	'>
                    J’ai pas un compte?{' '}
                    <Link href='/signup'>
                        <span>Crée un compte.</span>
                    </Link>
                </p>
            </div>
        </>
    );
};


const mapSateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
});

export default connect(mapSateToProps, { login })(Login);
