import config from '../config';

// import fetch from 'node-fetch';

let url = config.api.url;

const galleryImages = () => {

    const reqOptions = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json' 
        }
    };
    reqOptions.method = 'GET';

    return fetch(`${url}/gallery`, reqOptions)
        .then(response => response.json())
        .then(galleryImages => {
            console.log(galleryImages);
            return galleryImages;
        });
};

export default {
    galleryImages
};