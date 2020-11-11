import React from 'react'
import firebase from 'firebase'

const Dashboard = ({ tenants }) => {

    return (
        <>
            <h4>Dashboard</h4>
            <div className="row center m-3">
                <div className="card" style={{ width: "22rem" }}>
                    <img className="img-fluid" alt="" src="https://mdbootstrap.com/img/Photos/Others/images/10.jpg" />
                    <div className="card body">
                        <h5>Complaint title</h5>
                        <p >
                            Some quick example text to build on the card title and make
                            up the bulk of the card&apos;s content.
                        </p>
                        <button className="btn btn-primary">View Complaint</button>
                    </div>
                </div>
                <div className="card" style={{ width: "22rem" }}>
                    <img className="img-fluid" alt="" src="https://mdbootstrap.com/img/Photos/Others/images/2.jpg" />
                    <div className="card body">
                        <h5>Complaint title</h5>
                        <p>
                            Some quick example text to build on the card title and make
                            up the bulk of the card&apos;s content.
                        </p>
                        <button className="btn btn-primary">View Complaint</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard