import {combineReducers } from 'redux';
import {projectList} from './_projects'
import {blogPosts} from './_blogs'

let initialState = {
    sideDrawerOpen: false,
    projectList,
    blogPosts,
    navigationPage: "/personal-site"
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

const projectReducer = (state=initialState.projectList, action) => {
    switch(action.type){
        default:
            return state;
    }
}

const blogReducer = (state=initialState.blogPosts, action) => {
    switch(action.type){
        default:
            return state;
    }
}

const navigationReducer = (state=initialState.navigationPage, action) => {
    switch(action.type){
        case "NAVIGATE_SITE":
            return action.site;
        default: 
        return state;
    }
} 

const rootReducer = combineReducers({
    sideDrawerOpen: drawerReducer,
    projectList: projectReducer,
    blogPosts: blogReducer,
    navigationPage: navigationReducer,
})

export default rootReducer