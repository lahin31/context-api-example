import React, { Component } from 'react';
import { Consumer } from '../../context'
import { Link } from 'react-router-dom'

class AllStudents extends Component {
    state = {  }
    deleteStudent = (id, dispatch) => {
        dispatch({
            type: 'DELETE_STUDENT',
            payload: id
        })
    }
    render() { 
        return ( 
            <Consumer>
                { value => {
                    const { students, dispatch } = value
                        return (
                            <React.Fragment>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            { students.map(student => {
                                                return (
                                                    <tr key={student.id}>
                                                        <td>{student.id}</td>  
                                                        <td>
                                                            <Link to={`student/${student.id}`}>
                                                                {student.name}
                                                            </Link>
                                                        </td> 
                                                        <td>{student.email}</td>
                                                        <td>
                                                        <button 
                                                            className="btn btn-danger"
                                                            onClick={() => this.deleteStudent(student.id, dispatch)}>Delete</button>
                                                        </td>
                                                    </tr>   
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </React.Fragment>
                        )
                }}
            </Consumer>
            
        );
    }
}
 
export default AllStudents;
