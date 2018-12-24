import { combineReducers } from 'redux';

import initialState from './initialState';
import SweetAlert from '../components/SweetAlert';

import actionTypes from '../actions/actionTypes';

const gallery = (state = initialState.gallery, action) => {

    switch(action.type) {

        case actionTypes.FETCH_GALLERY_SUCCESS:
            return Object.assign({}, state, {
                gallery: action.payload.data.images
            });
        case actionTypes.FETCH_GALLERY_FAILURE:
            SweetAlert('Unable To Fetch Images. You Can Try Again', 'error');
            return state;
        default: 
            return state;
    }
}


const rootReducer = combineReducers({
    gallery
});

export default rootReducer;