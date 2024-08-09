import React from 'react';


const User = ({name}) => {
   
  return (
    <div className='user-card'>
        
        <h2>name:
            {name}
        </h2>
        <h3>Jodhpur</h3>
        <h3>email: mathur.deepali88@yahoo.com</h3>
    </div>
  )
}

export default User