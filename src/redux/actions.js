// place all action creators here

function drawerClickHandler(){
    return{type:"SWITCH_DRAWER"}
}

function backdropClick(){
    return {type: "SWITCH_BACKDROP"}
}

function navigateSite(site){
    return{type: "NAVIGATE_SITE", site}
}

function activateBackdrop(){
    return {type: "SWITCH_BACKDROP"}
}

function projectClick(details){
    return {type: "CHANGE_DETAILS", payload: details}
}

export {
    drawerClickHandler, backdropClick, navigateSite, activateBackdrop, projectClick,
};