import React from 'react'
import './Input.css'

function Input(props) {
    
  return (
    <div>
      <input onChange={props.onChange}></input>
    </div>
  )
}

export default Input;