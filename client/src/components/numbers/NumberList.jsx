import React from 'react';
import Number from './number.jsx'
const NumberList =(props)=>(
  <div className='NumberList'>
    {props.numbers.map((number)=><Number number={number}/>)}
  </div>
)
export default NumberList
