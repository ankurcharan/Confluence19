import React from 'react';
// import { MediaBox } from 'react-materialize';

import './Gallery.css';

import PhotoGallery from 'react-photo-gallery';
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

	// componentWillMount() {

	// 	this.props.getImages();
	// }

	componentDidMount() {

		alert('hello');
	
		let boxes = document.querySelectorAll('.materialboxed');
		M.Materialbox.init(boxes, {});
	
	}

    render () {

		// let x = this.props.images.gallery;

		// let images;
		// if(x !== undefined) {

		// 	images = x.map((image, index) => {

		// 		return <Image
		// 					key={index}
		// 					caption={image.caption}
		// 					imageURL={image.imageURL}
		// 					title={image.title}
		// 				/>
		// 	});
		// } else {
		// 	images = '';
		// }



        return (


			<div id='images'>

				<h1 className='center'>#weDealInMemories</h1>

				<PhotoGallery 
					photos={photos}
					direction={"column"} 
				/>
		
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