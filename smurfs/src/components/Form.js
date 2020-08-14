import React from 'react';

export default function wForm(){
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