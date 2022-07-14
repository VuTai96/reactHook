import moment from 'moment';
import useFetch from '../Customize/fetch';
// /https://api.covid19api.com/country/vietnam?from=2022-06-14T00%3A00%3A00Z&to=2022-07-14T00%3A00%3A00Z'
const Covid = () => {
    let today2 = new Date();
    today2.setDate(today2.getDate() - 30);
    let { data: dataCovid, isLoading, isError } = useFetch(`https://api.covid19api.com/country/vietnam?from=${moment(today2).format(`YYYY-MM-DD`)}T00%3A00%3A00Z&to=${moment().format(`YYYY-MM-DD`)}T00%3A00%3A00Z`)
    return (
        <>
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