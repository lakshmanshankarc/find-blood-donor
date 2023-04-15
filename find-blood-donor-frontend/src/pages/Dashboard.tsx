import React, { useEffect } from 'react'
import axios from 'axios'
import { USER_URL } from '../../constants'
import Navbar from '../components/Navbar'
import { UserType } from '../../types/user'
import { Link } from 'react-router-dom'
function Dashboard() {
  const [user, setUser] = React.useState<UserType>()
  useEffect(() => {
    axios.get(USER_URL, {
      withCredentials: true
    }).then((res) => {
      setUser(res.data.user)
    }).catch((e) => console.log(e))
  }, [])
 const clearCookie= async (params:any) => {
  
 }
  console.log(user)
  return (
    <div className=' w-full '>
      <Navbar />
      {user ?
        <>
          <div className="grid grid-cols-3 gap-10 p-10 w-full h-screen">
            <div className="bg-gradient-to-br from-blue-100 shadow-xl  to-red-100 rounded-3xl col-span-2 h-400 mt-10 flex flex-col items-center justify-center">
              <h1 className="w-full  text-center text-9xl text-stone-900 font-ubuntu font-extrabold p-20">
                Welcome {user.username}
              </h1>
              <span className=' text-5xl font-ubuntu text-teal-400'>Role : {user.role}</span>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-red-500 rounded-bl-lg h-400 row-span-2 mt-10 rounded-3xl shadow-xl px-10">
              <h1 className="w-full text-center text-9xl text-red-500 font-ubuntu font-extrabold p-3">
                {user.bloodgroup}
              </h1>
              <h1 className="w-full text-5xl text-stone-100 font-ubuntu font-extrabold p-5">
                Age:{user.age}
              </h1>
              <h1 className="w-full text-5xl text-stone-100 font-ubuntu font-extrabold p-5">
                location:{user.location}
              </h1>
              <h1 className="w-full text-2xl text-stone-100 font-ubuntu font-extrabold p-5">
                You can Donate After:{user.donoravailon}
              </h1>

              <a href={`${user.telegramlink}`} target="_blank" rel="noopener noreferrer" className=' text-black text-3xl text-center'>
                <div className="w-full text-2xl  bg-slate-100 rounded-xl shadow-lg font-ubuntu font-extrabold p-5 flex justify-center little-big">Telegram</div>
              </a>

              <button className='w-full' onClick={()=>clearCookie}>
                <div className="w-full text-2xl text-stone-100  bg-orange-500 mt-10 rounded-xl shadow-lg font-ubuntu font-extrabold p-5 flex justify-center">Signout</div></button>
            </div>
            <div className="bg-gradient-to-br from-green-300 to-teal-100  rounded-3xl row-span-1 h-800 shadow-lg"></div>
            <div className="bg-gradient-to-br from-cyan-500 h-400 rounded-3xl shadow-lg"></div>
          </div>
        </>
        :
        <>
          <div className="login flex flex-col justify-center items-center w-full h-screen">
            <div className=" text-6xl text-red-500 font-ubuntu font-semibold">
              Please Login to Continue!
            </div>
            <Link to="/login" className="bg-white text-green-500 font-bold py-5 ml-10 px-24 rounded-md  hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out group text-3xl">
              Login
            </Link>
          </div>
        </>
      }
      <div className="h-screen w-full">
      </div>
    </div>
  )
}

export default Dashboard


