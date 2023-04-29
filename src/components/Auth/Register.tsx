import React, { useState, useEffect } from 'react';


import useStyles from './auth-jss';
import Link from "next/link";

const Register = () => {


    const classes = useStyles();

    const [user, setUser] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
        password2: '',
    });

    const { username, phone, email, password, password2 } = user;




    return (
        <>

            <div className={`${classes.root} card-shadow text-center`}>
                <h3 className='title'>Creer un compte</h3>
                <h6 className='subtitle'>Or</h6>

                <form className='mt-4' >
                    <div className='form-group'>
                        <input
                            className='input-text'
                            type='text'
                            name='username'
                            value={username}
                            placeholder='Username'
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
                            // required
                        />
                    </div>


                </form>

                <p className='form-link mt-3'>
                    J’ai déja un compte?{' '}
                    <Link href='/login'>
                        <span>Connexion.</span>
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Register;