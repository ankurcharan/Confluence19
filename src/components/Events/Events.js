import React from 'react';
import Card from '../Card/card';
import './events.css';

class Events extends React.Component {

	render(){
		const data = [
		  {
		    "category": "DANCE",
		    "image": "https://source.unsplash.com/user/erondu/600x400"
		  },
		  {
		    "category": "PHOTOGRAPHY",
		    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
		  },
		  {
		    "category": "MUSIC",
		    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
		  },
		  {
		    "category": "ARTS",
		    "image": "https://source.unsplash.com/user/erondu/600x400"
		  },
		  {
		    "category": "L&D",
		    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
		  },
		  {
		    "category": "LIFESTYLE",
		    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
		  },
		  {
		    "category": "INFORMALS",
		    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
		  }
		]

		const cardList = data.map((event,i) => <Card image={data[i].image} category={data[i].category}/>)
		return (
			<div className='container'>
				<h1>Events</h1>
				<div className='cardList'>
					{cardList}
				</div>
			</div>
		);
	}
}

export default Events;