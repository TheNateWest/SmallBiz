import { combineReducers } from "redux"

const businesses = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            const businesses = [ ...state ]
            businesses.splice(action.value, 1)
            return businesses
        default:
            return state
    }
}
const user = (state = [], action) => {
    switch(action.type) {
        case 'ADD_USER':
            console.log(state, 'action')
            return {userName: action.value}
        case 'REMOVE_USER':
            return state.userName = ''
        default:
            return state
    }
}

export default combineReducers({ businesses, user })