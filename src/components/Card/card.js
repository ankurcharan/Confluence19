import React from 'react';
import './card.css';

const Card = ({image, category}) => {
	return (
      <div className='z-depth-5 card'>
		<img src={image} alt={category} width='300' height='auto'/>
		<h5><a href='#'> {category} </a></h5>
      </div>
	);
}

export default Card;
