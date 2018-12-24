import actionTypes from './actionTypes';

import services from '../services/index';

const success = (type, payload) => ({
    type,
    payload,
});
  
const failure = (type, payload) => ({
    type,
    payload,
});


export function getImages() {

    return (dispatch) => {

        dispatch(success(actionTypes.FETCHING_GALLERY, null));

        services.galleryImages()
        .then(data => {
            if(data.success) {
                dispatch(success(actionTypes.FETCH_GALLERY_SUCCESS, data));
            } else {
                dispatch(failure(actionTypes.FETCH_GALLERY_FAILURE, data));
            }
        });

    }
}