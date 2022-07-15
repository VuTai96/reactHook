import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setDataCovid] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            try {
                //let res = await axios.get(url);
                let res = await axios.get(url, {
                    signal: controller.signal,
                    timeout: 1000
                });
                let data = res?.data || [];
                data = data.reverse();
                setDataCovid(data);
                setIsLoading(false);
                setIsError(false)
            } catch (err) {
                if (err.name == 'CanceledError') { // handle abort()
                    console.log("Aborted!");
                } else {
                    //console.log(err)
                    setIsLoading(false);
                    setIsError(true);
                }

            }
        }
        // setTimeout(() => {
        //     fetchData();
        // }, 1000);
        fetchData();
        return (() => {
            controller.abort()
            console.log('>>> exit home')
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return { data, isLoading, isError }
}
export default useFetch