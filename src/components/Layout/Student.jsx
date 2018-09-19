import React , { Component } from 'react';
import { Consumer } from '../../context';

class Student extends Component {
    state = { 
        student: {
            name: "",
            email: ""
        }
    }

    render() { 
        return ( 
            <Consumer>
                {value => {
                    let id = this.props.match.params.id;
                    const { students, dispatch } = value
                    let std = students.filter(std => {
                        return std.id === id
                    })
                    return (
                        <React.Fragment>
                            <h2><strong>Name</strong>: {std[0].name}</h2>
                            <h3><strong>ID</strong>: {std[0].id}</h3>
                            <h4><strong>Email</strong>: {std[0].email}</h4>
                        </React.Fragment>
                    )
                }}
            </Consumer>
        );
    }
}
 
export default Student;
