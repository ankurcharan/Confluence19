const admin = require('firebase-admin');

const express = require('express');
const app = express.Router();

// database reference
const db = admin.firestore();

const media = db.collection('media');

app.route('/')
    .post(addImage)
    .get(getImages);

// add image - POST

// {
// 	"imageURL": "https://i.ytimg.com/vi/hF_LjTUvP-U/maxresdefault.jpg",
// 	"caption": "This is the caption",
//  "category": "Arts",
//	"width": 16,
//	"height": 9
// }
function addImage (req, res) {

    console.log(req.body);

    if(req.body.imageURL === undefined || req.body.category === undefined) {

        res.status(400).json({
            success: false,
            message: 'send imageURL, and category'
        });
    }

    if(req.body.width === undefined || req.body.height === undefined) {

    	return res.status(400).json({
    		success: false,
    		message: 'send in photo dimensions'
    	});
    }

    req.body.priority = 1;
    let url = req.body.imageURL;

    url = modifiedName(url);
  
    media.doc(url).set(req.body)
        .then(() => {

            return res.status(200).json({
                success: true,
                message: 'image added'
            });
        })
        .catch((err) => {

            return res.status(500).json({
                success: false,
                message: 'image could not be added, try again',
                error: err
            });
        });
}


// TO MODIFY ANY STRING ACCORDING TO OUR NEED
// to set it as document key
function modifiedName(x) {
	
	x = x.toLowerCase(x);
	x = x.replace(/[^a-zA-Z0-9 ]/g, "");
	x = x.replace(/\s/g,'');
	return x;
}




// returns images - GET

// {
//     "success": true,
//     "message": "images received",
//     "data": {
//         "images": [
//             {
//                 "caption": "",
//                 "category": "Literature",
//                 "priority": 2,
//                 "height": 1,
//                 "imageURL": "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/Prince%20Chandel.jpg?alt=media&token=036956cc-c960-4d0f-8926-9cc4d2a10a61",
//                 "width": 1
//             },
//             {
//                 "caption": "",
//                 "category": "Arts",
//                 "priority": 1,
//                 "height": 1,
//                 "imageURL": "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/EventPosters%2FFake%20Poster.png?alt=media&token=ded9da16-3753-455a-8cc7-448cc5ef196b",
//                 "width": 1
//             }
//         ]
//     }
// }
function getImages (req, res) {

    let data = { images: [] };

    media.get()
        .then((snapshot) => {

            snapshot.forEach(image => {

                data.images.push(image.data());
            })

            // sorting the photos based on decreasing priority
            data.images = data.images.sort((img1, img2) => {
                return img2.priority - img1.priority;
            })

            return res.status(200).json({
                success: true,
                message: 'images received',
                data: data
            });
        })
        .catch((err) => {

            return res.status(500).json({
                success: false,
                message: 'server error. try again',
                error: err
            })
        })
}


module.exports = app;