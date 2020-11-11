import React from 'react'
import Notifications from '../dashboard/Notifications'

const ReplyComplaints = ({ complaint }) => {
    return (
        <>
            <div className="row center m-3">
                <div className="card" style={{ width: "22rem" }}>
                    <img className="img-fluid" alt="" src="https://mdbootstrap.com/img/Photos/Others/images/10.jpg" />
                    <div className="card body">
                        <h5>{ complaint.title}</h5>
                        <p >
                            {complaint.content}
                        </p>
                        <button className="btn btn-primary">View Complaint</button>
                    </div>
                </div>
                <div className="card" style={{ width: "22rem" }}>
                    <img className="img-fluid" alt="" src="https://mdbootstrap.com/img/Photos/Others/images/2.jpg" />
                    <div className="card body">
                        <h5>{complaint.title}</h5>
                        <p>
                            {complaint.content}
                        </p>
                        <button className="btn btn-primary">View Complaint</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ReplyComplaints