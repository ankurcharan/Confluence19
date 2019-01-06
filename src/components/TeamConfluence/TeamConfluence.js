import React from 'react';
// import M from 'materialize-css';

// import { Link } from 'react-router-dom';

import './TeamConfluence.css';

class Team extends React.Component {
	
	render() {
		
		return (
			<>
			<h1>Team Confluence</h1>
				<div class="flip">
					<div class="front" style={{
						backgroundImage: "url(" + "https://images.unsplash.com/photo-1473700216830-7e08d47f858e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" + ")"
					}}>

					</div>
					<div class="back">
						<h2>Ankur Charan</h2>

						<a href='tel:+919468184831'>
							<i className='material-icons'>local_phone</i>
							+91-9468184831
						</a>
						
						<br />
						<br />
						<br />

						<div className='social'>
							<a href='https://www.facebook.com/ankurcharan06' target='_blank'>
								<img
									className='socialTag'
									src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png'
									alt='facebook'
								/>
							</a>

							<a href='mailto:ankurcharan98@gmil.com'>
								<img
									className='socialTag'
									src='http://www.logospng.com/images/3/gmail-icon-3143.png'
									alt='gmail'
								/>
							</a>
						</div>


					</div>
				</div>
				<div class="flip">
					<div class="front" style={{
						backgroundImage: "url(" + "https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80" + ")"
					}}>
					{/* <h1 class="text-shadow">LAKE</h1> */}
					</div>
					<div class="back">
					<h2>Angular</h2>
					<p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
					</div>
				</div>
				<div class="flip">
					<div class="front" style={{
						backgroundImage: "url(" + "https://images.unsplash.com/photo-1495211895963-08d8812dcbf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" + ")"
					}}>
					{/* <h1 class="text-shadow">OCEAN</h1> */}
					</div>
					<div class="back">
					<h2>Angular</h2>
					<p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
					</div>
				</div>

				<br />
				<br />
			</>
			
			);
		}
	}
	
	export default Team;