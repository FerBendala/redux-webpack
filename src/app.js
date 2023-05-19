import { useNotes } from './hooks'
import { useDispatch, useSelector } from 'react-redux'
import { sumOne } from './redux/counterReducer'
import store from './store'

const App = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const clicks = counter.clicks

    const notes = useNotes(BACKEND_URL)

    return (
        <section className='container'>
            {/* Clicks reducer */}
            <button onClick={() => dispatch(sumOne(clicks))}>
                clicked {counter.clicks} times
            </button>

            {/* Notes hook */}
            <div>
                <strong>{notes.length} </strong>
                notes on server {BACKEND_URL}
            </div>
        </section>
    )
}

export default App
