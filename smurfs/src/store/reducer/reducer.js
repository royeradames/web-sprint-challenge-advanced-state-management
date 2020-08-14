// import { } from '../action'

const initialState = {
    name: "",
    age: 0,
    height: "",
    id: 0
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case '':
            return{
                ...state,
                
            }
        default:
            return state
    }
}