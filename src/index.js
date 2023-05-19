import 'core-js/stable/index.js'
import 'regenerator-runtime/runtime.js'

import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './store'

const App = lazy( () => import( './app' ) )

createRoot( document.getElementById( 'root' ) )
    .render(
        <StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </StrictMode>
    )
