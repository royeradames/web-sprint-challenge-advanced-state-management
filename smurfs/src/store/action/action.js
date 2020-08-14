import axios from 'axios'

export const MEMBER_SUCCESS = 'MEMBER_SUCCESS'
export const MEMBER_FAIL = 'MEMBER_FAIL'
export const MEMBER_GET = 'MEMBER_GET'

export const addMember = (member) => (dispatch) =>{
    axios.post( 'http://localhost:3333/smurfs',member)
        .then(resp => {
            debugger
            dispatch({type: MEMBER_SUCCESS, payload: {newMember:resp.data}})

        })
        .catch( err => {
            debugger
            // dispatch({type: MEMBER_FAIL, payload: {errorMessage: err.message}})
            console.log(err.message)
        })
}

export const getMembers = () => (dispatch) => {
    axios.get('http://localhost:3333/smurfs')
     .then( resp => {
         debugger
        dispatch({type: MEMBER_GET, payload: {SmurfList:resp.data}})
     })
      .catch( err => {
          console.log(err)
      })
    
}  