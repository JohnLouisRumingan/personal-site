import {combineReducers } from 'redux';

const projectList = [
    {
        name: "BoredGamr",
        url: "https://github.com/JohnLouisRumingan/bored_gamer_frontend",
        image: '',
        description: 'Welcome to Bored Gamer, where you can explore a selection of board games, save your favorites or add them to your collection. You can create events, join events, and see who is bringing what game to the party! This app uses the API from Board Game Atlas to render detailed game info. Built with React.js and Redux is supported by a backend API using Ruby/Rails with a Postgres db.',
    },
    {
        name: "TIKR",
        url: "https://github.com/JohnLouisRumingan/tikr_frontend", 
        image: "",
        description: "TIKR is a small stock portfolio platform with historical trading data. Due to API limitations, historical data is limited but app can scale with more companies. Users can view stock details including historical stock data and add or remove them from their portolio. Built with React.js and supported by a backend API using Ruby/Rails with a Postgres db.",
    },
    {
        name: "Codenames",
        url: "https://github.com/JohnLouisRumingan/codenames_frontend",
        image: "",
        description: "A browser version of a popular board game called Codenames designed by Vlaada Chvatil. This game was designed on the front end using vanilla Javascript and is supported by a backend API using Ruby/Rails with a Postgres db.",
    },
    {
        name: "Pokemon Trader",
        url: "https://github.com/JohnLouisRumingan/pokemon_trader-1",
        image: "",
        description: "POKEMON TRADER An app where users can log in, open packs of pokemon cards, offer trades with other users. This app is built on Ruby on Rails HTML.ERB with CSS styling and uses Postgres db.",
    }
]

const navigationList = [
    {
        link: "/personal-site",
        class: "nav-link",
        icon: "home", 
        description: "Home"
    }, 
    {
        link: "/story",
        class: "nav-link",
        icon: "book", 
        description: "Home"
    },
    {
        link: "/projects",
        class: "nav-link",
        icon: "suitcase", 
        description: "Projects"
    },
    {
        link: "/art",
        class: "nav-link",
        icon: "paint brush", 
        description: "Art"
    },
    {
        link: "/about",
        class: "nav-link",
        icon: "help", 
        description: "About"
    }
] 

let initialState = {
    sideDrawerOpen: false,
    projectList,
    navigationList,
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

const navigationReducer = (state=initialState.navigationList, action) => {
    switch(action.type){
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    sideDrawerOpen: drawerReducer,
    projectList: projectReducer,
    navigationList: navigationReducer,
})

export default rootReducer