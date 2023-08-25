import { FETCH_DATA,FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "../types/Types";

export const fetchData = () => ({
    type: FETCH_DATA,
   
  });
  
  export const fetchDataSuccess = (data) => ({

    type: FETCH_DATA_SUCCESS,
    payload: data,
  });
  
  export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
  });