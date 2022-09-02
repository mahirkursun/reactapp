import React, { Component } from 'react'

const UserContext = React.createContext();
//Provider, Consumer

const reducer = (state,action) => {
    switch(action.type) {
        case "DELETE_USER":
             return {
                ...state,
                users : state.users.filter(user => action.payload !== user.id)
             }
        case "ADD_USER":
             return {
              ...state,
              users : [...state.users,action.payload]
             }
            default :
              return state
    }
}

export class UserProvider extends Component {
    state = {
        users : [
          {
            id : "unique-1",
            name : "Mustafa Murat Coşkun",
            salary : "5000",
            department : "Bilişim"
          },
          {
            id : "unique-2",
            name : "Kemalettin Taslak",
            salary : "4000",
            department : "Pazarlama"
          },
          {
            id : "unique-3",
            name : "Ahmet Tarak",
            salary : "6000",
            department : "Üretim"
          }
          
        ],
        dispatch : action => {
            this.setState(state => reducer(state, action))
        }
    }
    render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}

      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;

