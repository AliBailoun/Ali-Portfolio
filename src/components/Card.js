import React from 'react';

export default function Card(props) {
  return (
    <div className='container'>
      <h1>Projects:</h1>
      <ul className='list-group'>
        {props.modules.map((module) => (
          <li className='list-group-item' key={props.modules.id}>
            {`${props.modules.title} ${props.modules.description} ${props.modules.depLink} ${props.modules.repLink} ${props.modules.image}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
