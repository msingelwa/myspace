import React from 'react'
import Notifications from '../dashboard/Notifications'

const ReplyComplaints = ({ complaint }) => {
    return (
        <div className="container complaint">
            <div className="card content grey-text text-darken-3 p-3 center">
                <span>Complaint by {complaint.name}</span>
                <span className="card-title">{complaint.title}</span>
                <p>{complaint.content}</p>
                <p className="grey-text">8th Novemver, 12pm</p>
            </div>
        </div>

    )
}
export default ReplyComplaints