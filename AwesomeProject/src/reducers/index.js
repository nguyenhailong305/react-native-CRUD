import { combineReducers } from 'redux';
import ItemReducers from "./ItemReducer/ItemReducers"
export default combineReducers({
    items : ItemReducers
});      
