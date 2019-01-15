import React from 'react';
import Card from '../Card/card';
import './events.css';

class Events extends React.Component {

	render(){
		const url1='https://mcblogs.montgomerycollege.edu/mcvoices/wp-content/uploads/2017/02/635933316607684169702958543_dance-1.jpg';
		const url2='https://media.boingboing.net/wp-content/uploads/2018/11/sale_16355_primary_image.jpg';
		const url3='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1Q7Eb9xdclZtuJvZA2NAcIHFg7Wx0v6vqM9Y3NlWmae9vsTr';
		const url4='https://www.northcountycoalitionforthearts.org/wp-content/uploads/2018/08/Arts-clip-art.jpg';
		const url5='http://3.bp.blogspot.com/-WQMunRubjg0/TvMScXPcTJI/AAAAAAAAABA/dhRc96Zhp1o/s1600/187881_148476311883209_2367276_n.jpg';
		const url6='https://static1.squarespace.com/static/556e7281e4b0677012bbcc4f/t/599a44d9bebafb029c877cde/1503282400472/lifestyle-font.jpg';
		const url7='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8ll5Gp5q-q82-s8keFkNo3eef_FPhnUCZ5etg5GYSIfL1txH';
		return (
			<div className='container'>
				<Card url={url1} category='DANCE'/>
				<Card url={url2} category='PHOTOGRAPHY'/>
				<Card url={url3} category='MUSIC'/>
				<Card url={url4} category='ARTS'/>
				<Card url={url5} category='L&D'/>
				<Card url={url6} category='LIFESTYLE'/>
				<Card url={url7} category='INFORMALS'/>
			</div>
		);
	}
}

export default Events;