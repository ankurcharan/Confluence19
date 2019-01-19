import React from 'react';
import './card.css';

const Card = ({image, category}) => {
	return (
      <div className='z-depth-5 card'>
		<img src={image} alt={category} width='300' height='400'/>
		<p><a href='#'> {category} </a></p>
      </div>
	);
}

export default Card;
