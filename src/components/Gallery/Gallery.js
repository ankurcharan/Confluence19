import React from 'react';
import { MediaBox } from 'react-materialize';


import './Gallery.css';
import Jumbotron from '../Jumbotron/Jumbotron';

// class Image extends React.Component {

// 	constructor(props) {
// 		super(props);

// 		this.onClickHandler = this.onClickHandler.bind(this);
// 	}

// 	render() {

// 		return (

// 			<div className='col s12 m12 l6'>
// 				<img 
// 					className="center responsive-img materialboxed"  
// 					data-caption={this.props.caption}
// 					src={this.props.imageURL} 
// 					alt={this.props.title}
// 					onClick={this.onClickHandler}
// 				/>
// 			</div>

// 		);
// 	}
// }

class Gallery extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			images: []
		}
	}

	componentWillMount() {

		const reqOptions = {
			method: 'GET',
			Accept: 'application/json'
		}
		fetch('https://us-central1-confluence19.cloudfunctions.net/api/gallery', reqOptions)
			.then(data => data.json())
			.then(data => {

				if(data.success) {
					this.setState({
						images: data.data.images
					})
				}
			})
	}

	// componentDidMount() {

	
	// 	let boxes = document.querySelectorAll('.materialboxed');
	// 	M.Materialbox.init(boxes, {});
	
	// }

    render () {

		const images = this.state.images.map((image, index) => {

			// return <Image
			// 			key={index}
			// 			caption={image.caption}
			// 			imageURL={image.imageURL}
			// 			title={image.title}
			// 		/>

			return <MediaBox
						key={index}
						caption={image.caption}
						src={image.imageURL}
					/>
		});

		console.log(images);

        return (


			<div>

				<Jumbotron 
					title='#WeDealInMemories' 
					text='Glimpses of Confluence' 
					photo='https://i.ytimg.com/vi/hF_LjTUvP-U/maxresdefault.jpg'
					
				/>

				<br />

				<div className='container'>
					<div className='row'>
		
						{images}

					</div>
				</div>

			</div>
        );
    }
}

export default Gallery;