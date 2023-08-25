import { FETCH_DATA, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "../types/Types";

const initialState = {
    data: null,
  loading: false,
  error: null,
}

const FetchApiReducer = (state = initialState, action) => {
  console.log("reducer file ------>", action)
    switch (action.type) {
      case FETCH_DATA:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null,
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          data: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default FetchApiReducer;
 
  
  
  
  
  