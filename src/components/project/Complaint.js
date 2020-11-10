import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComplaint } from '../../store/actions/complaintActions'


class Complaint extends Component {
    state = {
        name: '',
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);

        this.props.createComplaint(this.state.complaint)
    }
    render() {
        return (
            <div className="container sign-up shadow">
                <form onSubmit={this.handleSubmit}>
                    <h5>Create New Complaint</h5>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" id="name" className="form-control" placeholder="Name" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" id="title" className="form-control" placeholder="Title" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Complaint</label>
                        <textarea id="content" className="materialize-tetxarea" onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary blue">Create</button>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createComplaint: (complaint) => {
            dispatch(createComplaint(complaint))
        }
    }
}

export default connect(null, mapDispatchToProps)(Complaint)