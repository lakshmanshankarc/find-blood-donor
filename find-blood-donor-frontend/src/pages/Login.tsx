import React, { useState } from 'react'
import { LoginType } from '../../types/user'
import axios from 'axios'
import { Form } from 'react-router-dom'
import { LOGIN_URL } from "../../constants"
import { redirect } from 'react-router-dom'
import { useCookies } from 'react-cookie'
const intial: LoginType = {
    email: "",
    password: "",
}
function Login() {
    const [user, setUser] = useState<LoginType>(intial);
    const [cookies, setCookie] = useCookies(['blood-token'])
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            // let res = await axios.post('/api/user/signup', user)
            const res = await axios.post(LOGIN_URL, user)
            alert(res.data.message)
            console.log(res.data);
            window.location.href = "/dashboard"
            setCookie('blood-token', res.data.token, { path: '/' })
        } catch (e) {
            alert("Unable to Login");
            console.log(e);
        }
    }
    return (
        <div className=' w-full h-screen flex justify-center items-center'>
            <Form onSubmit={handleSubmit} className=" w-1/4 flex h-max p-14 px-14 flex-col rounded-2xl shadow-lg bg-gradient-to-r from-fuchsia-400 to-yellow-100 justify-evenly items-center">
                <h1 className=' text-3xl font-ubuntu'>Login User</h1>
                <input type="email" name="email" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className=' w-11/12 px-3 my-3 shadow-lg rounded p-3' placeholder='Enter Your Email' required
                />
                <input type="password" name="password" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
                    className=' w-11/12 px-3 my-3 shadow-lg rounded p-3' placeholder='Enter Password' required
                />
                <button type="submit" className=' bg-rose-500 w-11/12 rounded-xl border-0 p-5 text-xl btn btn-outline hover:bg-rose-400 h-full'>Login</button>
            </Form>
        </div>
    )
}

export default Login