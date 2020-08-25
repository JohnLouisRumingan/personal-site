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

function projectClick(){
    return {type: "SWITCH_BACKDROP"}
}

// function projectClick(){
//     return {type: }
// }

export {
    drawerClickHandler, backdropClick, navigateSite, projectClick,
};