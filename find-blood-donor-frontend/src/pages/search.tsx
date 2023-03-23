import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar"
import './Search.css';
type User = {
    username: string;
    age: string;
    email: string;
    password: string;
    bloodgroup: string;
    telegramlink: string;
    location: string;
    role: string;
    donoravailon: string;
};

export default function Search() {
    const [users, setUsers] = useState<User[]>([]);
    const [bloodgroup, setBloodgroup] = useState('');
    const [location, setLocation] = useState('');
    let [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('http://localhost:4500/users');
            const data = await response.json();
            setUsers(data.filter((user: User) => new Date(user.donoravailon) < new Date()));
        };
        fetchUsers();
    }, []);

    const handleSearch = () => {
        console.log(users, bloodgroup, location)
        filteredUsers = users.filter((user: User) => user.bloodgroup === bloodgroup && user.location === location);
        console.log(filteredUsers);
        setFilteredUsers(filteredUsers);
    };

    return (
        <div>
            <Navbar />
            <div className='search-container rounded-xl '>
                <label className="title">Search For Your Blood Here!</label>
                <div className="flex  justify-evenly">
                    <label className='search-label'>
                        {/* update Blood group */}
                        <label htmlFor="bloodgroup" className="font-ubuntu text-xl">Blood Group:</label>
                        <select className='search-select' name='bloodgroup' value={bloodgroup} onChange={(e) => setBloodgroup(e.target.value)}>
                            <option value="">Select</option>
                            <option value="a+ve">A+ve</option>
                            <option value="a-ve">A-ve</option>
                            <option value="AB+ve">AB+ve</option>
                            <option value="AB-ve">AB-ve</option>
                        </select>
                    </label>
                    {/* update Location */}
                    <label className='search-label'>
                        Location:
                        <select className='search-select' value={location} onChange={(e) => setLocation(e.target.value)}>
                            <option value="">Select</option>
                            <option value="erode">Erode</option>
                            <option value="tiruppur">Tiruppur</option>
                        </select>
                    </label>
                </div>
                <button className='shadow-md rounded-md ml-10 w-2/4 px-10 py-2 bg-gradient-to-r from-orange-400 to-amber-400 font-extrabold' onClick={handleSearch}>Search</button>

                {filteredUsers.length > 0 ? (
                    <ul className=' rounded-2xl shadow-xl py-10 '>
                        {filteredUsers.map((user: User) => (
                            <li key={user.username} className='search-item'>
                                <div className='search-item-username text-2xl '>Username : {user.username}</div>
                                <div className='search-item-details text-2xl'>Age : {user.age}</div>
                                <div className='search-item-details text-2xl'>Bloodgroup : {user.bloodgroup}</div>
                                <div className='search-item-details text-2xl'>Location : {user.location}</div>
                                <div className='search-item-details text-2xl'>Available from : {user.donoravailon}</div>
                                <a href={`mailto:${user.email}?subject=Blood Donor Needed!&body=We want ${bloodgroup} immediately and find your details in the blood donor app please contact immediately`} className=' text-black text-xl my-3 text-center '>
                                    <div className="w-full text-xl bg-amber-200 mt-10 rounded-xl my-3 shadow-lg font-ubuntu font-extrabold p-5 flex little-big justify-center text-black">Email</div>
                                </a>
                                <a href={`${user.telegramlink}`} target="_blank" rel="noopener noreferrer" className=' text-black text-xl text-center'>
                                    <div className="w-full text-xl  bg-slate-100 rounded-xl shadow-lg font-ubuntu font-extrabold p-5 flex justify-center little-big">Telegram</div>
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p style={{ marginTop: '2rem', color: '#666' }}>No users found.</p>
                )}
            </div>
        </div>
    );
}