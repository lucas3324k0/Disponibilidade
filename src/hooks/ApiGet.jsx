import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:3000/disponibilidades'

const ApiGet = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [url]);

    return {data, loading, error };
};

export default ApiGet;
