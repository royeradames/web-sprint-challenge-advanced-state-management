import axios from 'axios'

export const MEMBER_SUCCESS = 'MEMBER_SUCCESS'
export const MEMBER_FAIL = 'MEMBER_FAIL'
// export const MEMBER_GET = 'MEMBER_GET'

export const addMember = (member) => (dispatch) =>{
    axios.post( 'http://localhost:3333/smurfs',member)
        .then(resp => {
            debugger
            dispatch({type: MEMBER_SUCCESS, payload: resp.data})

        })
        .catch( err => {
            debugger
            dispatch({type: MEMBER_SUCCESS, payload: err.message})

        })
}

// export const getMember = () => (dispatch) => {
//     dispatch({type: MEMBER_GET, payload: null})
// }  