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

const getEventsByCategory = (category) => {

    alert(`fetchign ${category}`);

    const reqOptions = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    };
    reqOptions.method = 'GET';

    return fetch(`${url}/events?category=${category}`, reqOptions)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            return response;
        });
}

export default {
    galleryImages,
    getEventsByCategory
};