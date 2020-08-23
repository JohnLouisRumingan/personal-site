// place all action creators here

function drawerClickHandler(){
    return{type:"SWITCH_DRAWER"}
}

function backdropClick(){
    return {type: "CLOSE_DRAWER"}
}

function navigateSite(site){
    return{type: "NAVIGATE_SITE", site}
}

export {
    drawerClickHandler, backdropClick, navigateSite,
};