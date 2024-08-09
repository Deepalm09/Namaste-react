import React, { Component } from 'react'

export class UserClass extends Component {
    constructor(props){
        super(props)
        this.state ={
            count: 0
        };

    }
  render() {
    const { name , location} = this.props;
    const { count } = this.state;
    return (
        <div className='user-card'>
        <h2>{count}</h2>
        <button onClick={()=>{
            this.setState({
                count : this.state.count + 1
            })
            
        }}>increase</button>
        <h2>name: {name}</h2>
        <h3>location:{location}</h3>
        <h3>email: mathur.deepali88@yahoo.com</h3>
    </div>
    )
  }
}

export default UserClass