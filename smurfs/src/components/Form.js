import React, { useState } from 'react';
//redux
import { connect } from 'react-redux'
import {addMember} from '../store/action/action'
export function Form(props) {
    const [member, setMember] = useState({
        name: "",
        age: '',
        height: "",
        
    })
    const handleChange = (e) => {
        setMember({
            ...member,
            [e.target.name]: e.target.name === 'age'? Number.parseInt(e.target.value) :e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addMember(member)
        setMember({
            name: "",
            age: '',
            height: "",
        })
    }
    return (
        <section>
            <h2>
                Become a new member
            </h2>
            <form onSubmit={handleSubmit}>
                <input 
                    name='name'
                    placeholder='Name'
                    onChange={handleChange}
                    value={member.name}
                />
                <input 
                    name='age'
                    placeholder='Age'
                    onChange={handleChange}
                    value={member.age}
                    type='number'
                />
                <input 
                    name='height'
                    placeholder='Height'
                    onChange={handleChange}
                    value={member.height}
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

export default connect(mapStateToProps, {addMember})(Form)