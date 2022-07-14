import { useState, useEffect } from 'react';
import axios from "axios";
import moment from 'moment';

const Covid = () => {
    let fromdate = new Date();
    let todate = new Date();
    todate.setDate(todate.getDate() - 30);
    const [dataCovid, setDataCovid] = useState([])
    useEffect(async () => {
        let res = await axios.get(`https://api.covid19api.com/country/vietnam?from=${moment(todate).format('YYYY-MM-DD')}T00%3A00%3A00Z&to=${moment(fromdate).format('YYYY-MM-DD')}T00%3A00%3A00Z`);
        let data = res?.data || [];
        setDataCovid(data);
    }, [])
    return (
        <>
            {console.log('>>> res: ', dataCovid)}
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
                    {dataCovid && dataCovid.length > 0 &&
                        dataCovid.map((item, index, old) => {
                            return (
                                <tr key={item.ID}>
                                    <td>{moment(item.Date).format('DD-MM-YYYY')}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{index === 0 ?
                                        item.Active
                                        :
                                        item.Active - old[index - 1].Active
                                    }
                                    </td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table >
        </>
    )
}

export default Covid;