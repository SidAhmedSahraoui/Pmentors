import React, { useState, useEffect } from 'react';

import useStyles from './auth-jss';
import Link from "next/link";

const Login = () => {


    const classes = useStyles();

    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const { username, password } = user;




    return (
        <>
            <div className={`${classes.root} card-shadow text-center`}>
                <h3 className='title'>Sign in</h3>
                <h6 className='subtitle'>Start helping or getting help.</h6>

                <form className='mt-4'>
                    <div className='form-group'>
                        <input
                            className='input-text'
                            type='text'
                            name='username'
                            value={username}
                            placeholder='Username'
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
                            required
                        />
                    </div>

                </form>

                <p className='form-link mt-3'>
                    J’ai pas un compte?{' '}
                    <Link href='/signup'>
                        <span>Crée.</span>
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Login;