import {createStore} from 'redux';
import reducer from './Redux/reducer';

let store = createStore(reducer);

export default store;