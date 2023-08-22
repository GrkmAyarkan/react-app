import React, { Component } from 'react'
import '../App.css';

const Button = (props) => {
    return (
      <div>
        <button onClick={props.onClick} className='Button' style={{color:"white",fontSize:"18px",borderRadius:"10px",padding:"6px",width:"100px",border:"none",cursor:"pointer"}}>{props.title}</button>
      </div>
    )
}

export default Button;

