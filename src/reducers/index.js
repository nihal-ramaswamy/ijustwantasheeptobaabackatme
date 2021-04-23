import sheepStateReducer from './sheepState.js';
import toggleStateReducer from './toggleState.js';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    sheepStateReducer,
    toggleStateReducer
});

export default allReducers;
