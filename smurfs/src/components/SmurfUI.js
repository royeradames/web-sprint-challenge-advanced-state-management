import React from 'react';

export function SmurfUI(props){

    return(
        <section>
            <h3>
                Name: {props.name}
            </h3>
            <p>
                Age: {props.age}
            </p>
            <p>
                Height: {props.height}
            </p>
        </section>
    )
}

export default SmurfUI