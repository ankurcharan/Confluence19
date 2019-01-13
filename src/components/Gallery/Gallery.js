import React from 'react';
// import { MediaBox } from 'react-materialize';

import './Gallery.css';

import PhotoGallery from 'react-photo-gallery';
import LightBox from 'react-images';


// import Jumbotron from '../Jumbotron/Jumbotron';

import { connect } from 'react-redux';
import { getImages } from '../../actions/action';


import M from 'materialize-css';

import camera from './cam.jpeg';

class Gallery extends React.Component {

	componentWillMount() {
		this.props.getImages();
	}

	constructor() {
		super();

		this.state = {
			currentImage: 0
		};
		this.openLightBox = this.openLightBox.bind(this);
		this.closeLightBox = this.closeLightBox.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
	}

	openLightBox(event, obj) {

		this.setState({
			currentImage: obj.index,
			lightboxIsOpen: true,
		})
	}

	closeLightBox() {

		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		})
	}

	gotoPrevious() {

		this.setState({
			currentImage: this.state.currentImage - 1
		})
	}

	gotoNext() {

		this.setState({
			currentImage: this.state.currentImage + 1
		})
	}

	// componentDidMount() {
	// 	let boxes = document.querySelectorAll('.materialboxed');
	// 	M.Materialbox.init(boxes, {});
	// }

	render() {

		let imgs = this.props.images;

		let photos = [];

		for(let one in imgs) {

			let obj = {};
			obj["src"] = imgs[one]["imageURL"];
			obj["width"] = imgs[one]["width"]; 
			obj["height"] = imgs[one]["height"];

			photos.push(obj);
		}

		return (
			<div id='images'>
				{/* <h1 className='center'>#weDealInMemories</h1> */}

				{/**Jumbotron */}
				{/* <div class="parallax-container">
					<div class="parallax">
						<img 
							src={camera} 
							alt='memories'
						/>
					</div>
				</div> */}


			<div id="index-banner" class="parallax-container">
                <div class="section no-pad-bot">
                    <div class="container">
                        <br />
                        <br />
                        <h1 id='memoriesHeader' class="header center text-lighten-2">
							#weDealInMemories
                        </h1>
                        <div class="row center">
                            <h5 class="header col s12 light">
                                {this.props.text}
                            </h5>
                        </div>
                        {/*<div class="row center">*/}
                            {/*<a href="https://www.instagram.com/ankurcharan/" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">*/}
                                {/*Get to know me :)*/}
                            {/*</a>*/}
                        {/*</div>*/}
                        <br />
                        <br />
                    </div>
                </div>
                <div class="parallax">
                    <img src={camera} alt="memories" />
                </div>
            </div>

				{
					(this.props.isFetchingImages) ?
					(<h1 className='center'>Loading</h1>) : 
					(
						<>
							<PhotoGallery
								photos={photos}
								direction={"column"}
								onClick={this.openLightBox}
							/>

							<LightBox
								images={photos}
								onClose={this.closeLightBox}
								onClickPrev={this.gotoPrevious}
								onClickNext={this.gotoNext}
								currentImage={this.state.currentImage}
								isOpen={this.state.lightboxIsOpen}
							/>
						</>					
					)
				}
			</div>
		);
	}
}


const mapStateToProps = state => ({
	images: state.gallery,
	isFetchingImages: state.isFetchingImages
});


export default connect(
	mapStateToProps,
	{ getImages }
)(Gallery);