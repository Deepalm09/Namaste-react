import React, { Component } from 'react'

export class UserClass extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const { name , location} = this.props
    return (
        <div className='user-card'>
        <h2>name: {name}</h2>
        <h3>location:{location}</h3>
        <h3>email: mathur.deepali88@yahoo.com</h3>
    </div>
    )
  }
}

export default UserClass