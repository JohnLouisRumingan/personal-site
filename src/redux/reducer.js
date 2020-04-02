import {combineReducers } from 'redux';

let initialState = {
    sideDrawerOpen: false,
    pageStatus: "main-page",
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

const pageReducer = (state=initialState.pageStatus, action) => {
    switch(action.type){
        case "CHANGE_PAGE":
            return action.page;
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    sideDrawerOpen: drawerReducer,
    pageStatus: pageReducer,

})

export default rootReducer