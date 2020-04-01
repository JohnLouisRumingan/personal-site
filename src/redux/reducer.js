import {combineReducers } from 'redux';

let initialState = {
    sideDrawerOpen: false,
}

const drawerReducer = (state=initialState.sideDrawerOpen, action) => {
    switch(action.type){
        case "SWITCH_DRAWER":
            return !state;
        case "CLOSE_DRAWER":
            return false;
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    sideDrawerOpen: drawerReducer,
})

export default rootReducer