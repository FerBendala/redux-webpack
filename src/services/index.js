import axios from 'axios'

const handleRequest = async requestPromise => {
    try {
        const response = await requestPromise
        return response.data
    } catch (error) {
        console.log('Error:', error)
        throw error
    }
}

const getAll = async url => {
    const requestPromise = await axios.get(url)
    return handleRequest(requestPromise)
}

export default {
    getAll,
}
