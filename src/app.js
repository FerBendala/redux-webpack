import { useState } from 'react'
import { useNotes } from './hooks'

import './app.scss'

const App = () => {
    const [counter, setCounter] = useState(0)
    const [values, setValues] = useState([])
    const notes = useNotes(BACKEND_URL)

    const handleClick = () => {
        setCounter(counter + 1)
        setValues(values.concat(counter))
    }

    return (
        <section className="container">
            hello webpack {counter} clicks
            <button onClick={handleClick}>
                press
            </button>
            <div>
                {notes.length} notes on server{' '}
                {BACKEND_URL}
            </div>
        </section>
    )
}

export default App
