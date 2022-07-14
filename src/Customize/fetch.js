import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setDataCovid] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                let res = await axios.get(url);
                let data = res?.data || [];
                data = data.reverse();
                setDataCovid(data);
                setIsLoading(false);
                setIsError(false)
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchData();
        /*add this comment  to disable the eslint  (// eslint-disable-next-line)*/
        // eslint-disable-next-line 
    }, [])

    return { data, isLoading, isError }
}
export default useFetch