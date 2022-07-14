import moment from 'moment';
import useFetch from '../Customize/fetch';

const Covid = () => {
    let { data: dataCovid, isLoading, isError } = useFetch('https://pi.covid19api.com/country/vietnam?from=2022-06-14T00%3A00%3A00Z&to=2022-07-14T00%3A00%3A00Z')
    return (
        <>
            {console.log('>>>>>>>>>>>>>>')}
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {!isError && !isLoading && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map((item, index, old) => {
                            return (
                                <tr key={item.ID}>
                                    <td>{moment(item.Date).format('DD-MM-YYYY')}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{
                                        index < (old.length - 1) ?
                                            item.Active - old[index + 1].Active
                                            :
                                            ""
                                    }
                                    </td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })
                    }
                    {isLoading && !isError &&
                        <tr>
                            <td colSpan='5' style={{ textAlign: "center" }}>isLoading...</td>
                        </tr>
                    }
                    {isError &&
                        <tr>
                            <td colSpan='5' style={{ textAlign: "center" }}>Something wrong...</td>
                        </tr>
                    }
                </tbody>
            </table >
        </>
    )
}

export default Covid;