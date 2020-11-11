import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.email || this.state.password !== '') {
            alert('Please fill the form')
        } else {
            firebase.auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .catch(err => {
                    switch (err.code) {
                        case 'auth/already-in-use':
                        case 'auth/invalid-email':
                            this.setState({
                                email:err.meessage
                            })
                            break
                        case 'auth/weak-password':
                            this.setState({
                                password: err.meessage
                            })
                            break;
                        default:
                            break
                    }
                })
        }
    }
    render() {
        return (
            <>
                <div>
                    <h5 className="center p-3 shadow text-white"><strong>Register your new Account</strong></h5>
                </div>
                <div className="container sign-up shadow">
                    <form onSubmit={this.handleSubmit}>
                        <h5>Sign Up</h5>

                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" id="firstname" className="form-control" placeholder="First name" onChange={ this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" id="lastName" className="form-control" placeholder="Last name" onChange={ this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={ this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={ this.handleChange}/>
                        </div>

                        <button type="submit" className="btn btn-primary blue">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered? <Link to="/">sign in</Link>
                        </p>
                    </form>
                </div>
            </>
        )
    }
}

export default SignUp