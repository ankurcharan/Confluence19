import React from 'react';
// import { MediaBox } from 'react-materialize';

import './Gallery.css';

import PhotoGallery from 'react-photo-gallery';
import LightBox from 'react-images';


// import Jumbotron from '../Jumbotron/Jumbotron';

import { connect } from 'react-redux';
import { getImages } from '../../actions/action';


import M from 'materialize-css';


// eslint-disable-next-line no-lone-blocks
{/***
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
 */}



const photos = [
	{
		src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
		width: 18,
		height: 9
	},
	{
		src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
		width: 1,
		height: 1
	},
	{
		src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/PpOHJezOalU/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
		width: 18,
		height: 9
	},
	{
		src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
		width: 1,
		height: 1
	},
	{
		src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/PpOHJezOalU/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
		width: 18,
		height: 9
	},
	{
		src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
		width: 1,
		height: 1
	},
	{
		src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/PpOHJezOalU/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
		width: 18,
		height: 9
	},
	{
		src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
		width: 1,
		height: 1
	},
	{
		src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
		width: 3,
		height: 4
	},
	{
		src: "https://source.unsplash.com/PpOHJezOalU/800x599",
		width: 4,
		height: 3
	},
	{
		src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
		width: 4,
		height: 3
	}
];












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


	componentDidMount() {

		alert('hello');

		let boxes = document.querySelectorAll('.materialboxed');
		M.Materialbox.init(boxes, {});

	}

	render() {

		let imgs = this.props.images;

		let photosApi = [
			{
				src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
				width: 4,
				height: 3
			}];

		for(let one in imgs) {

			let obj = {};
			obj["src"] = one["imageURL"];
			obj["width"] = one["width"]; 
			obj["height"] = one["height"];

			console.log(obj);
			photosApi.push(obj);
		}

		console.log("photosApi");
		console.log(photosApi);


		return (


			<span id='images'>

				<h1 className='center'>#weDealInMemories</h1>

				{
					(this.props.isFetchingImages) ?
					(<h1 className='center'>Loading</h1>) : 
					(
						<>
							<PhotoGallery
								photos={photosApi}
								direction={"column"}
								onClick={this.openLightBox}
							/>

							<LightBox
								images={photosApi}
								onClose={this.closeLightBox}
								onClickPrev={this.gotoPrevious}
								onClickNext={this.gotoNext}
								currentImage={this.state.currentImage}
								isOpen={this.state.lightboxIsOpen}
							/>
						</>					
					)
				}
			</span>
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