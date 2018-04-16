import React from 'react';

const Person = (props)=>(
  <div className='person'>
        <li>
        {props.person.first_name}
        props.person.last_name}
        props.person.birth_date}</li>

  </div>
)
export default Person
