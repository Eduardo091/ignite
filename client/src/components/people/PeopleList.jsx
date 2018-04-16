import React from  'react';
import Person from './Person.jsx'
const PeopleList = (props)=>(

  <div className='PeopleList'>

    {props.people.map((person)=><Person person={person}/>)}
  </div>
)
export default PeopleList
