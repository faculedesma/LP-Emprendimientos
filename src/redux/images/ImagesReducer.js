import actionTypes from './ImagesConstants';

const initialStore = {
  imagesPaths: null
};

export default function imagesReducer(state = initialStore, action) {
  switch(action.type) {
    case actionTypes.FETCH_IMAGES_PATHS:
      return { ...state, imagesPaths: action.imagesPaths };
    
    case actionTypes.CLEAN_IMAGES_PATHS: 
      return { ...initialStore };
    
    case actionTypes.SAVE_IMAGE_PATH:
      return { ...initialStore };

    case actionTypes.DELETE_IMAGE:
      return { ...initialStore };

    default:
      return state;
  }
}