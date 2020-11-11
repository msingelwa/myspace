import React, { useState } from 'react'
import { Link, Redirect, Route } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import SignedInLinks from '../layout/SignedInLinks'
import firebase from 'firebase';
import SignedOutLinks from '../layout/SignedOutLinks';
import bg from '../../images/bg.jpeg';


const SignIn = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState()

    const [emailErr, setEmailErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const [hasAccount, setHasAccount] = useState(false)

    const clear = () => {
        setEmail('')
        setPassword('')
    }

    const handleLogOut = () => {
        firebase.auth.signOut();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || password === '') {
            alert('please fill the form');
        } else {
            firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .catch(err => {
                    switch (err.code) {
                        case 'auth/invalid-email':
                        case 'auth/user-disabled':
                        case 'auth/user-found':
                            setEmailErr(err.meessage)
                            break
                        case 'auth/wrong-password':
                            setPasswordErr(err.message)
                            break;
                        default:
                            break
                    }
                })
        }
        clear()
    }
    return (
        <>
            {
                user ? (
                    <>
                        <SignedInLinks handleLogOut={handleLogOut} />
                        <SignedOutLinks />
                    </>
                ) : (
                        <>
                            <div className="container row p-5">
                                <div className="col-lg-4 col-md-8 col-12 text-lg-left text-center text-md-center ">
                                    
                                    <h5 className="center p-3 shadow text-white"><strong>Welcome to MY SPACE</strong></h5>
                                    <p className="text-white shadow">We help those who need a place to hide their heads</p>
                                    
                                    
                                </div>
                                <div className="sign-in shadow col-lg-8 d-lg-block d-none ">
                                    <form onSubmit={handleSubmit} className="form">
                                        <h5>Sign In</h5>

                                        <div className="form-group ">
                                            <label>Email address</label>
                                            <input type="email" value={email} className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" value={password} className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                                        </div>

                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                            </div>
                                        </div>
                                        <button type="submit" onClick={handleSubmit} className="btn btn-primary blue">Sign In</button>
                                        <div>
                                            <p className="text-right" onClick={() => setHasAccount(!hasAccount)}>
                                                Not Registered? <Link to="/signup">sign up here</Link>
                                            </p>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </>
                    )
            }
        </>
    )
}

export default SignIn
