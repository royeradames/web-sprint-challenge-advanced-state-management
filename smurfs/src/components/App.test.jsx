import React from 'react'
import { render, screen, fireEvent, act} from '@testing-library/react'
import App from './App'

test('Renders App without errors', () => {
    render(<App />)
})