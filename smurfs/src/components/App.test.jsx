import React from 'react'
import { render, screen, fireEvent, act} from '@testing-library/react'
import ContactForm from './ContactForm'

test('Renders form without errors', () => {
    render(<ContactForm />)
})