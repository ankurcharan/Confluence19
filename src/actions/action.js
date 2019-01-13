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

const isFetchGalleryReqd = (getState) => {

    const images = getState().gallery;
    if(images.length > 0) {
        return false;
    }
    return true;

}

export const getImages = () => (dispatch, getState) => {

    if(isFetchGalleryReqd(getState) === false) {
        return;
    }

    dispatch(success(actionTypes.API_CALL_FETCHING_IMAGES, {}));

    services.galleryImages()
    .then(data => {
        if(data.success) {
            dispatch(success(actionTypes.FETCH_GALLERY_SUCCESS, data));
        } else {
            dispatch(failure(actionTypes.FETCH_GALLERY_FAILURE, data));
        }
    });
}

const isFetchingEventsNeeded = (state, categoryName) => {

    if(state[categoryName]) {
        return false;
    }
    else {
        return true;
    }
}

export const getEventsByCategory = (categoryName) => (dispatch, getState) => {


    const eventsState = getState().events;
    if(isFetchingEventsNeeded(eventsState, categoryName) === false) {
        return;
    }

    dispatch(success(actionTypes.API_CALL_FETCHING_EVENTS, {}))

    services.getEventsByCategory(categoryName)
        .then((data) => {

            if(data.success) {
                data.category = categoryName;
                dispatch(success(actionTypes.FETCH_EVENTS_BY_CATEGORY_SUCCESS, data));
            } else {
                dispatch(failure(actionTypes.FETCH_EVENTS_BY_CATEGORY_FAILURE, data));
            }
        })
}