import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchAPI= async (searchTerm) => {
        try {
        const response = await yelp.get('/search', {
            params: {
                // send to search settings limit to 50 searches, etc
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
    };

    // use 'useEffect' below to run only first time
    useEffect(() => {
        searchAPI('american');
    }, [])

    return [searchAPI, results, errorMessage];
};