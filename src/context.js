import React, { Component } from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
    if(action.type==='ADD_STUDENT'){ 
        state.students.push(action.payload)
        return state;
    }
    else if('DELETE_STUDENT'){ 
        let students = state.students.slice()
        let stdIndex = students.findIndex((std) => {
            return std.id === action.payload;
        });
        students.splice(stdIndex, 1)
        state.students = students
        return state;
    }
    else { 
        return state
    }
}

export class Provider extends Component {
    state = {
        students: [
            { id: "141-115-025", name: "Muhammad Lahin", email: "lahin@gmail.com" },
            { id: "141-115-007", name: "Shaju Miah", email: "shaju@gmail.com" },
            { id: "141-115-019", name: "Motiur Rahman Nijami", email: "nijami@gmail.com" }
        ],
        dispatch: action => this.setState(
            state => reducer(state, action)
        )
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                { this.props.children }
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer