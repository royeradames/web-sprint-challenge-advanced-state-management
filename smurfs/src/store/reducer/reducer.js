import {MEMBER_SUCCESS, MEMBER_GET } from '../action/action'
// , MEMBER_FAIL
const initialState = [{
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0,
    errorMessage:'',
}]

export const reducer = (state = initialState, action) => {
    debugger
    switch(action.type){
        case MEMBER_SUCCESS:
            return action.payload.newMember
            
        case MEMBER_GET:
            debugger
            return action.payload.SmurfList
        default:
            return state
    }
}