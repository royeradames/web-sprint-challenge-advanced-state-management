import React from 'react';
//component
import SmurfUI from './SmurfUI'
//redux
import {connect} from 'react-redux'
export function SmurfCard(props){
    const {state} = props
    const listOfSmurfs = state
    return(
        <section>
            <h2>
                Members List:
            </h2>
            {listOfSmurfs.map(aSmurf => {
                return <SmurfUI aSmurf={aSmurf} key={aSmurf.id}/>
            })}
            
        </section>
    )
}

const mapStateToProps = (state) =>{
    return{
        state
    }
}

export default connect(mapStateToProps, {})(SmurfCard)