import React from 'react';
import './card.css';

const Card = ({url, category}) => {
	return (
      <div className='z-depth-5 card'>
		<img src={url} alt={category} width='200' height='200'/>
		<p><a href='#'> {category} </a></p>
      </div>
	);
}

export default Card;
