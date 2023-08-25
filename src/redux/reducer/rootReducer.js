import {combineReducers} from 'redux'
import FetchApiReducer from './fetchApiReducer';

const rootReducer = combineReducers({
    
    FetchApi: FetchApiReducer
  });

  export default rootReducer;