import { useState, useEffect } from 'react'
import service from '../services'

export const useNotes = url => {
    const [notes, setNotes] = useState( [] )

    useEffect( () => {
        service
            .get( url )
            .then( notes =>
                setNotes( notes )
            )
    }, [url] )

    return notes
}
