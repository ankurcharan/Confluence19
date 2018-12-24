import React from 'react';
// import { MediaBox } from 'react-materialize';

import './Gallery.css';
import Jumbotron from '../Jumbotron/Jumbotron';

import { connect } from 'react-redux';
import { getImages } from '../../actions/action';


import M from 'materialize-css';

class Image extends React.Component {

	constructor(props) {
		super(props);

		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler(e) {

		e.preventDefault();
	}

	render() {

		return (

			<div className='col s12 m12 l6'>
				<img 
					className="center responsive-img materialboxed"  
					data-caption={this.props.caption}
					src={this.props.imageURL} 
					alt={this.props.title}
					onClick={this.onClickHandler}
				/>
			</div>

		);
	}
}

class Gallery extends React.Component {

	componentWillMount() {

		this.props.getImages();
	}

	componentDidMount() {
	
		let boxes = document.querySelectorAll('.materialboxed');
		M.Materialbox.init(boxes, {});
	
	}

    render () {

		let x = this.props.images.gallery;

		let images;
		if(x !== undefined) {

			images = x.map((image, index) => {

				return <Image
							key={index}
							caption={image.caption}
							imageURL={image.imageURL}
							title={image.title}
						/>
			});
		} else {
			images = '';
		}

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


const mapStateToProps = state => ({
    images: state.gallery,
});


export default connect(
	mapStateToProps,
	{ getImages }
)(Gallery);