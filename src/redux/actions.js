// place all action creators here

function drawerClickHandler(){
    return{type:"SWITCH_DRAWER"}
}

function backdropClick(){
    return {type: "CLOSE_DRAWER"}
}

function changePage(page){
    return {type: "CHANGE_PAGE", page}
}

export {
    drawerClickHandler, backdropClick,
    changePage,
};