import React from 'react';

export function SmurfUI({aSmurf}){
    debugger
    return(
        <section>
            <h3>
                Name: {aSmurf.name}
            </h3>
            <p>
                Age: {aSmurf.age}
            </p>
            <p>
                Height: {aSmurf.height}
            </p>
        </section>
    )
}

export default SmurfUI