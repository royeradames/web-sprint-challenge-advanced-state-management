import {MEMBER_SUCCESS, MEMBER_FAIL } from '../action'

const initialState = [{
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
}]

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case MEMBER_SUCCESS:
            return{
                ...state,
                
            }
        case MEMBER_FAIL:
            return{
                ...state,
                
            }
        default:
            return state
    }
}