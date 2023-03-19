import React, { useState } from 'react'
import { UserType } from '../../types/user'
import axios from 'axios'
import { Form } from 'react-router-dom'
import { SIGNUP_URL, addThreeMonthsToDate } from "../../constants"
const intial: UserType = {
    username: "",
    age: 0,
    email: "",
    password: "",
    bloodgroup: "",
    location: "",
    telegramlink: "",
    role: "",
    donoravailon: ""
}

function Signup() {
    const [user, setUser] = useState<UserType>(intial);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        user.donoravailon = addThreeMonthsToDate(user.donoravailon)
        user.telegramlink = `https://t.me/${user.telegramlink}`
        try {
            // let res = await axios.post('/api/user/signup', user) 
            const res = await axios.post(SIGNUP_URL, user)
            alert(res.data.message)
            console.log(user)
        } catch (e) {
            alert("Unable to create User");
            console.log(e);
        }
    }
    return (
        <div className=' w-full h-screen flex justify-center items-center'>
            <Form onSubmit={handleSubmit} className=" w-1/4 flex h-max p-14 px-14 flex-col rounded-2xl shadow-lg bg-gradient-to-r from-fuchsia-400 to-yellow-100 justify-evenly items-center">
                <h1 className=' text-3xl font-ubuntu'> Sign Up </h1>

                <input type="text" name="username" id="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
                    className=' w-11/12 my-3 px-3 shadow-lg rounded p-3' placeholder='Enter User Name' required
                />

                <input type="number" name="age" id="age" value={user.age} onChange={(e) => setUser({ ...user, age: parseInt(e.target.value) })}
                    className=' w-11/12 px-3 my-3 shadow-lg rounded p-3' placeholder='Enter Your Age' required
                />

                <input type="email" name="email" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className=' w-11/12 px-3 my-3 shadow-lg rounded p-3' placeholder='Enter Your Email' required
                />


                <input type="password" name="password" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
                    className=' w-11/12 px-3 my-3 shadow-lg rounded p-3' placeholder='Enter Password' required
                />

                <input type="text" name="bloodgroup" id="bloodgroup" value={user.bloodgroup} onChange={(e) => setUser({ ...user, bloodgroup: e.target.value })}
                    className=' w-11/12 px-3 my-3 shadow-lg rounded p-3' placeholder='Enter Blood Group' required
                />

                <input type="text" name="location" id="location" value={user.location} onChange={(e) => setUser({ ...user, location: e.target.value })}
                    className=' w-11/12 px-3 my-3 shadow-lg rounded p-3' placeholder='Enter Your Location' required
                />

                <input type="text" name="telegramlink" id="telegramlink" value={user.telegramlink} onChange={(e) => setUser({ ...user, telegramlink: e.target.value })}
                    className=' w-11/12 px-3 my-3 shadow-lg rounded p-3' placeholder='Enter Telegramlink' required
                />

                <label htmlFor="role" className=' -translate-x-44 font-semibold'>Role</label>
                <select name="role" id="role" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })} defaultValue={'user'}
                    className=' w-11/12 px-3 my-3 shadow-lg rounded p-3' placeholder='Enter Your Email' required
                >
                    <option value="user">user</option>
                    <option value="user">donor</option>
                </select>

                <label htmlFor="donoravailon" className=' -translate-x-32 font-semibold'>Last Donated On</label>
                <input type="date" name="donoravailon" id="donoravailon" value={user.donoravailon} onChange={(e) => setUser({ ...user, donoravailon: e.target.value })}
                    className=' w-11/12 px-3 my-3 shadow-lg rounded p-3' placeholder='Enter Your Email' required

                />

                <button type="submit" className=' bg-rose-500 w-11/12 rounded-xl border-0 p-5 text-xl btn btn-outline hover:bg-rose-400 h-full'>Submit</button>
            </Form>
        </div>
    )
}

export default Signup
