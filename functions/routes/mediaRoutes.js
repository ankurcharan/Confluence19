const admin = require('firebase-admin');

const express = require('express');
const app = express.Router();

// database reference
const db = admin.firestore();

const media = db.collection('media');

app.route('/')
    .post(addImage)
    .get(getImages);

// add image
// {
// 	"imageURL": "https://i.ytimg.com/vi/hF_LjTUvP-U/maxresdefault.jpg",
// 	"caption": "This is the caption",
//  "category": "Arts"
// }
function addImage (req, res) {

    console.log(req.body);

    if(req.body.imageURL === undefined || req.body.category === undefined) {

        res.status(400).json({
            success: false,
            message: 'send imageURL, and category'
        });
    }

    req.body.priority = 1;
    let url = req.body.imageURL;
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




// returns images

// {
//     "success": true,
//     "message": "images received",
//     "data": {
//         "images": [
//             {
//                 "caption": "This is the caption",
//                 "title": "Title 1",
//                 "priority": 1,
//                 "imageURL": "https://i.ytimg.com/vi/hF_LjTUvP-U/maxresdefault.jpg"
//             },
//             {
//                 "title": "Title 2",
//                 "priority": 1,
//                 "imageURL": "https://i.ytimg.com/vi/hF_LjTUvP-U/maxresdefault.jpg",
//                 "caption": "This is the caption"
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