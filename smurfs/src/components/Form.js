import React from 'react';
//redux
import {connect} from 'react-redux'

export function Form(){
    return(
        <section>
            <h2>
                Become a new membera
            </h2>
            <form onSubmit={''}>
                <input placeholder='name'/>
                <input placeholder='age'/>
                <input placeholder='height'/>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

const mapStateToProps = (state) =>{
    return{
        state
    }
}

export default connect(mapStateToProps, {})(Form)