import React from 'react';
const Number =(props)=>(
  <div className='Number'>
   {props.isItPrime(props.number.number)}
  </div>
)
export default Number
