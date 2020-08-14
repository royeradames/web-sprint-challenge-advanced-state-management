import React from 'react'
import { render} from '@testing-library/react'
import Index from './index'

test('Renders App without errors', () => {
    render(<Index />)
})