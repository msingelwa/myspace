import React from 'react'
import { Link } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><Link to="./tenants">Tenants</Link></li>
            <li><Link to="/complaint">Create Complaint</Link></li>
            <li><Link to="./">Logout</Link></li>
            <li><Link to="./" className="btn btn-floating blue lighten-dark">LM</Link></li>
        </ul>
    )
}

export default SignedInLinks
