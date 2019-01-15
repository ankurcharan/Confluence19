import React from 'react';
// import M from 'materialize-css';

// import { Link } from 'react-router-dom';

import './TeamConfluence.css';

const workForce = [
	{
		name: 'Prince Chandel',
		imageUrl: 'https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Prince%20Chandel.jpg?alt=media&token=036956cc-c960-4d0f-8926-9cc4d2a10a61',
		primaryContact: 9898989898,
		secondaryContact: 9898989898,
		facebookLink: 'https://www.facebook.com/prince.chandel.56808',
		email: 'ankurcharan98@gmail.com'
	},
	{
		name: 'Prince Chandel',
		imageUrl: 'https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Prince%20Chandel.jpg?alt=media&token=036956cc-c960-4d0f-8926-9cc4d2a10a61',
		primaryContact: 9898989898,
		secondaryContact: 9898989898,
		facebookLink: 'https://www.facebook.com/prince.chandel.56808'
	},
	{
		name: 'Prince Chandel',
		imageUrl: 'https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Prince%20Chandel.jpg?alt=media&token=036956cc-c960-4d0f-8926-9cc4d2a10a61',
		primaryContact: 9898989898,
		secondaryContact: 9898989898,
		email: 'ankurcharan98@gmail.com'
	},
	{
		name: 'Prince Chandel',
		imageUrl: 'https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Prince%20Chandel.jpg?alt=media&token=036956cc-c960-4d0f-8926-9cc4d2a10a61',
		primaryContact: 9898989898,
		facebookLink: 'https://www.facebook.com/prince.chandel.56808',
		email: 'ankurcharan98@gmail.com'
	},
	{
		name: 'Prince Chandel',
		imageUrl: 'https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Prince%20Chandel.jpg?alt=media&token=036956cc-c960-4d0f-8926-9cc4d2a10a61',
		primaryContact: 9898989898,
		secondaryContact: 9898989898,
	},
	{
		name: 'Prince Chandel',
		imageUrl: 'https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Prince%20Chandel.jpg?alt=media&token=036956cc-c960-4d0f-8926-9cc4d2a10a61',
		primaryContact: 9898989898,
	},
	
]

const facebookLogo = 'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png';
const gmailLogo = 'https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png';





class Person extends React.Component {

	render() {

		return (

			<div className='col s12 m6 l4 person'>
				<img
					className='circle people'
					src={this.props.imageUrl}
					alt='profile'
				/>	
				<br />
				<span className='personName'>{this.props.name}</span>
				<br />
				<span className='teamPhone'>
					<a href={`tel:${this.props.primaryContact}`}>
						{this.props.primaryContact}
					</a>
					{
						(this.props.secondaryContact) ?
						(
							<>
								<br />
								<a href={`tel:${this.props.primaryContact}`}>
									{this.props.secondaryContact}	
								</a>
							</>
						) : (
							''
						)
					}
				</span>	
				<br />
				<span>

					{
						(this.props.facebookLink) ?
						(
							<a href={this.props.facebookLink} target='_blank' rel="noopener noreferrer">
								<img 
									className='socialTags' 
									src={facebookLogo}
									alt='facebook'
								/>
							</a>
						) : (
							''
						)
					}
					{` `}

					{
						(this.props.email) ?
						(
							<a href={`mailto:${this.props.email}`} target='_blank' rel="noopener noreferrer">
								<img 
									className='socialTags'
									src={gmailLogo}
									alt='email'
								/>
							</a>
						) : (
							''
						)
					}
				</span>
			</div>

		);
	}
}





class Team extends React.Component {
	
	render() {
		
		return (
			<div id='team'>
			<h1>Team Confluence</h1>

				<br />
				<br />


				<div className='container'>
				
					<div className='row'>


						{
							workForce.map((person, index) => {

								return (

									<Person
										name={person.name}
										imageUrl={person.imageUrl}
										primaryContact={person.primaryContact}
										secondaryContact={person.secondaryContact}
										facebookLink={person.facebookLink}
										email={person.email}
									/>


								);
							})
						}

					{/**
						<div className='col s12 m6 l4 person'>
							<img
								className='circle people'
								src='https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Prince%20Chandel.jpg?alt=media&token=036956cc-c960-4d0f-8926-9cc4d2a10a61'
								alt='facebook'
							/>	
							<br />
							<span>Prince Chandel</span>
							<br />
							<span className='teamPhone'>98368890803</span>	
							<br />
							<span>
								<a href='https://www.google.com/'>
									<img 
										className='socialTags' 
										src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png'
										alt='hello'
									/>
								</a>
								{` `}
								<a href='https://www.google.com/'>
									<img 
										className='socialTags'
										src='https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png'
										alt='hello'
									/>
								</a>
							</span>
						</div>



						<div className='col s12 m6 l4 person'>
							<img
								className='circle people'
								src='https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Prince%20Chandel.jpg?alt=media&token=036956cc-c960-4d0f-8926-9cc4d2a10a61'
								alt='facebook'
							/>	
							<br />
							<span>Prince Chandel</span>
							<br />
							<span className='teamPhone'>98368890803</span>	
							<br />
							<span>
								<a href='https://www.google.com/'>
									<img 
										className='socialTags' 
										src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png'
										alt='hello'
									/>
								</a>
								{` `}
								<a href='https://www.google.com/'>
									<img 
										className='socialTags'
										src='https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png'
										alt='hello'
									/>
								</a>
							</span>
						</div><div className='col s12 m6 l4 person'>
							<img
								className='circle people'
								src='https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Prince%20Chandel.jpg?alt=media&token=036956cc-c960-4d0f-8926-9cc4d2a10a61'
								alt='facebook'
							/>	
							<br />
							<span>Prince Chandel</span>
							<br />
							<span className='teamPhone'>98368890803</span>	
							<br />
							<span>
								<a href='https://www.google.com/'>
									<img 
										className='socialTags' 
										src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png'
										alt='hello'
									/>
								</a>
								{` `}
								<a href='https://www.google.com/'>
									<img 
										className='socialTags'
										src='https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png'
										alt='hello'
									/>
								</a>
							</span>
						</div>
						<div className='col s12 m6 l4 person'>
							<img
								className='circle people'
								src='https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Prince%20Chandel.jpg?alt=media&token=036956cc-c960-4d0f-8926-9cc4d2a10a61'
								alt='facebook'
							/>	
							<br />
							<span>Prince Chandel</span>
							<br />
							<span className='teamPhone'>98368890803</span>	
							<br />
							<span>
								<a href='https://www.google.com/'>
									<img 
										className='socialTags' 
										src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png'
										alt='hello'
									/>
								</a>
								{` `}
								<a href='https://www.google.com/'>
									<img 
										className='socialTags'
										src='https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png'
										alt='hello'
									/>
								</a>
							</span>
						</div>
						<div className='col s12 m6 l4 person'>
							<img
								className='circle people'
								src='https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Prince%20Chandel.jpg?alt=media&token=036956cc-c960-4d0f-8926-9cc4d2a10a61'
								alt='facebook'
							/>	
							<br />
							<span>Prince Chandel</span>
							<br />
							<span className='teamPhone'>98368890803</span>	
							<br />
							<span>
								<a href='https://www.google.com/'>
									<img 
										className='socialTags' 
										src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png'
										alt='hello'
									/>
								</a>
								{` `}
								<a href='https://www.google.com/'>
									<img 
										className='socialTags'
										src='https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png'
										alt='hello'
									/>
								</a>
							</span>
						</div><div className='col s12 m6 l4 person'>
							<img
								className='circle people'
								src='https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Prince%20Chandel.jpg?alt=media&token=036956cc-c960-4d0f-8926-9cc4d2a10a61'
								alt='facebook'
							/>	
							<br />
							<span>Prince Chandel</span>
							<br />
							<span className='teamPhone'>98368890803</span>	
							<br />
							<span>
								<a href='https://www.google.com/'>
									<img 
										className='socialTags' 
										src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png'
										alt='hello'
									/>
								</a>
								{` `}
								<a href='https://www.google.com/'>
									<img 
										className='socialTags'
										src='https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png'
										alt='hello'
									/>
								</a>
							</span>
						</div><div className='col s12 m6 l4 person'>
							<img
								className='circle people'
								src='https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Prince%20Chandel.jpg?alt=media&token=036956cc-c960-4d0f-8926-9cc4d2a10a61'
								alt='facebook'
							/>	
							<br />
							<span>Prince Chandel</span>
							<br />
							<span className='teamPhone'>98368890803</span>	
							<br />
							<span>
								<a href='https://www.google.com/'>
									<img 
										className='socialTags' 
										src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png'
										alt='hello'
									/>
								</a>
								{` `}
								<a href='https://www.google.com/'>
									<img 
										className='socialTags'
										src='https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png'
										alt='hello'
									/>
								</a>
							</span>
						</div>

					*/}












					</div>

				</div>




				
			</div>
			
			);
		}
	}
	
	export default Team;