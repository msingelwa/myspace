import React, { Component } from 'react'
import Tenants from '../project/Tenants'
import Notifications from './Notifications'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        const { complaints } = this.props
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <h4 className="text-center">List of Tenants</h4>
                        <Notifications />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <h4 className="text-center">Complaints</h4>
                        <Tenants complaints={complaints} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        complaints: state.complain.complaints
    }
}
export default connect(mapStateToProps)(Dashboard)
