import { combineReducers } from 'redux';
import PerfectCounter from './PerfectCounter';
import AsyncComponent from './AsyncComponent';
import Reset from './Reset';

export default combineReducers({
    PerfectCounter, Reset, AsyncComponent
});