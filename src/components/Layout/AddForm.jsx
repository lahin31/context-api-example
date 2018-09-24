import React, { Component } from 'react'
import { Consumer } from '../../context'

class AddForm extends Component {
    state = {          
        id: "",
        name: "",
        email: ""
    }
    onChange = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addFunc = (dispatch, e) => {
        e.preventDefault();
        let res_obj = { 
            id: this.state.id, 
            name: this.state.name, 
            email: this.state.email 
        }
        console.log(this.state)
        dispatch({
            type: "ADD_STUDENT",
            payload: res_obj
        })
        this.setState({
            id: "",
            name: "",
            email: ""
        })
    }
    render() { 
        return ( 
            <Consumer>
                { value => {
                    const { dispatch } = value
                    return (
                        <div className="card card-body mb-4 p-3">
                            <h1 className="display-4 text-center">
                                <i className="fas fa-plus"></i> Add new student
                            </h1>
                            <form onSubmit={this.addFunc.bind(this, dispatch)}>
                                <div className="form-group">
                                    <input type="text"
                                        placeholder="ID"
                                        name="id"
                                        className="form-control"
                                        value={this.state.id}
                                        onChange={e => this.onChange(e)}/>
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                        placeholder="Name"
                                        name="name"
                                        className="form-control"
                                        value={this.state.name}
                                        onChange={e => this.onChange(e)}/>
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                        placeholder="Email"
                                        name="email"
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={e => this.onChange(e)}/>
                                </div>
                                <button className="btn btn-primary btn-lg btn-block mb-2"
                                        type="submit">Add</button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
 
export default AddForm;
