import React from 'react'
import ReplyComplaints from './ReplyComplaints'
import { Route } from 'react-router-dom'

const Tenants = ({ complaints }) => {

    return (
        <div className="project-list section">
            <div>
                
            </div>
            {
                complaints && complaints.map((complaint) => {
                    return (
                        <ReplyComplaints complaint={complaint} key={complaint.id} />
                    )
                })
            }
        </div>
    )
}

export default Tenants
