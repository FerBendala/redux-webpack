import 'core-js/stable/index.js'
import 'regenerator-runtime/runtime.js'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

const root = document.getElementById('root')
createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>
)
