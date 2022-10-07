export const reducer=(state, action)=>{
    switch (action.type) {
      case "FETCH_PHOTOS":
          return {
            ...state,
            loading: false,
            photos: action.payload,
            error: null
          }
      case "FETCH_ERROR":
        return {
          ...state,
          loading: false,
          photos: [],
          error: action.payload
        }
        case "ADD_PHOTO":
          return {
            ...state,
            photos: [action.payload, ...state.photos],      
          }
        case "ADD_ERROR":
          return {
            ...state,
            error: action.payload      
          }
        case "DELETE_PHOTO":
          return {
            ...state,
            photos: state.photos.filter(photo=>photo.photo_id!==action.payload)     
          }
      default:
        return state;
    }
  }