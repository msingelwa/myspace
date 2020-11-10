import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        setPassword(e.target.value)
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    }
    return (
        <>
            <div className="container sign-in shadow">
                <form>
                    <h5>Sign In</h5>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary blue">Submit</button>
                    <div>
                        <p className="forgot-password text-right">
                            Not Registered? <Link to="/signup">sign up here</Link>
                        </p>
                    </div>
                </form>
                
            </div>
        </>
    )
}

export default SignIn
