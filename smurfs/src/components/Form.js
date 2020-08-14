import React, { useState } from 'react';
//redux
import { connect } from 'react-redux'

export function Form(props) {
    const [user, setUser] = useState({
        name: "",
        age: '',
        height: "",
    })
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addUser(user)
        setUser({
            name: "",
            age: '',
            height: "",
        })
    }
    return (
        <section>
            <h2>
                Become a new membera
            </h2>
            <form onSubmit={handleSubmit}>
                <input 
                    name='name'
                    placeholder='Name'
                    onChange={handleChange}
                    value={user.name}
                />
                <input 
                    name='age'
                    placeholder='Age'
                    onChange={handleChange}
                    value={user.age}
                />
                <input 
                    name='height'
                    placeholder='Height'
                    onChange={handleChange}
                    value={user.height}
                />
                <button type='submit'>Become New Member</button>
            </form>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, {})(Form)