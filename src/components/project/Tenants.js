import React from 'react'
import ReplyComplaints from './ReplyComplaints'
import { Route } from 'react-router-dom'

const Tenants = ({ complaints }) => {

    return (
        <div className="project-list section">
            <div>
                <h4 className="center text-white">Tenants Component</h4>
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
