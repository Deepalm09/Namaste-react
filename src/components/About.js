import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
        <h2>
            Namaste react About!!
        </h2>
        <User name="Akshay Saini"/>
        <UserClass name="Deepesh" location="Jodhpur"/>
    </div>
  )
}

export default About