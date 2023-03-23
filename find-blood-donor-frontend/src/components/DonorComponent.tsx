import React from 'react'
import axios from 'axios'
import { addThreeMonthsToDate } from '../../constants'

function DonorComponent() {
    const [date, setDate] = React.useState<string>("")


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(date);
        const udate = addThreeMonthsToDate(date)
        try {
            // let res = await axios.post('/api/user/signup', user)
            const res = await axios.post('http://localhost:4500/donate', { udate }, {
                withCredentials: true
            })
            alert(res.data.message)
            console.log(res.data)
        } catch (e) {
            alert("Unable to create User");
            console.log(e);
        }
    }

    return (
        <div>
            <label htmlFor="my-modal-6" className="btn w-full h-full text-4xl px-44 py-20 bg-green-500 hover:bg-lime-400 border-0 rounded-2xl shadow-2xl">Donate</label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Please Enter the Date you donate</h3>
                    <form onSubmit={handleSubmit} className="">
                        <input type="date" name="donoravailon" id="donoravailon" value={date} onChange={(e) => setDate(e.target.value)} className=' w-11/12 px-3 my-3 shadow-lg rounded p-3' placeholder='Enter Blood Group' required />

                        <button type="submit" className="btn w-full">Submit</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn w-full bg-red-500 hover:bg-orange-500 border-0 ">Close</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonorComponent