
import React, { useEffect } from 'react'
import axios from 'axios'
import { addThreeMonthsToDate } from '../../constants'

function DonorSearchComponent() {

    const [total, SetTotal] = React.useState(0)
    useEffect(() => {
        getBySearch();
    }, [])

    async function getBySearch() {
        try {
            // let res = await axios.post('/api/user/signup', user)
            const res = await axios.get('http://localhost:4500/donors', { withCredentials: true },)
            SetTotal(res.data.rowsaffected.length)
        } catch (e) {
            alert("Unable to create User");
            console.log(e);
        }
    }

    return (
        <div>
            <label htmlFor="" className="btn w-full h-full text-4xl px-44 py-20 bg-gradient-to-r from-emerald-400 to-violet-500 border-0 rounded-2xl shadow-2xl">
                Total Donated: {total}
            </label>
        </div>
    )
}

export default DonorSearchComponent