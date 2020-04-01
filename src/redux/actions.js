// place all action creators here

function drawerClickHandler(){
    return{type:"SWITCH_DRAWER"}
}

function backdropClick(){
    return {type: "CLOSE_DRAWER"}
}

export {
    drawerClickHandler, backdropClick,
    
};