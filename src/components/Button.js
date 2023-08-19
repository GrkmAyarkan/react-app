import React, { Component } from 'react'
import '../App.css';

 const Button = (props) => {
    return (
      <div>
        <button className='Button' style={{color:"white"}}>{props.title}</button>
      </div>
    )
}

export default Button;

