import React from 'react';
const Number =(props)=>(
  <div className='Number'>
  <li> {props.isItPrime(props.number.number)} </li>
  </div>
)
export default Number
