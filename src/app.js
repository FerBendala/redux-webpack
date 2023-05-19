import { Routes, Route, Link } from 'react-router-dom'
import { useNotes } from './hooks'
import { useDispatch, useSelector } from 'react-redux'
import { sumOne } from './redux/counterReducer'

import './scss/index.scss'

const ReducerTest = () => {
    const dispatch = useDispatch()
    const counter = useSelector( state => state.counter )
    const clicks = counter.clicks
    return (
        <>
            <h2>REDUCER (clicks are saved in redux state)</h2>
            <button onClick={() => dispatch( sumOne( clicks ) )}>
                clicked {counter.clicks} times
            </button>
        </>
    )
}

const HookTest = () => {
    const notes = useNotes( BACKEND_URL )
    return (
        <>
            <h2>HOOK (hook getting dev and prod backend urls from .env custom file)</h2>
            <div>
                <strong>{notes.length} </strong>
                notes on server {BACKEND_URL}
            </div>
        </>
    )
}

const Menu = () => {
    return (
        <ul>
            <li><Link to="/">Testing clicks reducer</Link></li>
            <li><Link to="notes">Testing database connection</Link></li>
        </ul>
    )
}

const App = () => {
    return (
        <section className='container'>
            <Menu />
            <Routes>
                <Route path="/" element={<ReducerTest />} />
                <Route path="notes" element={<HookTest />} />
            </Routes>
        </section>
    )
}

export default App
