import React from 'react';

const Show = (props) => (
  <li className="show media group">
    <img className="show-img" src={props.img} alt="show" />
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  </li>
);

export default Show;