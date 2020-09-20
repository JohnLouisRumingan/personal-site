// place all action creators here
import * as types from './actionTypes'

function drawerClickHandler(){
    return {type: types.SWITCH_DRAWER}
}

function backdropClick(){
    return {type: types.SWITCH_BACKDROP}
}

function navigateSite(site){
    return{type: types.NAVIGATE_SITE, site}
}

function activateBackdrop(){
    return {type: types.SWITCH_BACKDROP}
}

function projectClick(details){
    return {type: types.CHANGE_PROJECT_DETAILS, payload: details}
}

export {
    drawerClickHandler, backdropClick, navigateSite, activateBackdrop, projectClick,
};