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
        filteredUsers = users.filter((user: User) => user.bloodgroup === bloodgroup && user.location === location);
        setFilteredUsers(filteredUsers);
    };

    return (
        <div>
            <Navbar />
            <div className='search-container'>
                <label className="title">Search For Your Blood Here!</label>
                <label className='search-label'>
                    {/* update Blood group */}
                    Blood Group:
                    <select className='search-select' value={bloodgroup} onChange={(e) => setBloodgroup(e.target.value)}>
                        <option value="">Select</option>
                        <option value="a+ve">A+ve</option>
                        <option value="a-ve">A-ve</option>
                        <option value="ab+ve">AB+ve</option>
                        <option value="ab-ve">AB-ve</option>
                    </select>
                </label>
                <label className='search-label'>
                    Location:
                    <select className='search-select' value={location} onChange={(e) => setLocation(e.target.value)}>
                        <option value="">Select</option>
                        <option value="erode">Erode</option>
                        <option value="tiruppur">Tiruppur</option>
                    </select>
                </label>
                <button className='search-button' onClick={handleSearch}>Search</button>
                {filteredUsers.length > 0 ? (
                    <ul className='search-results'>
                        {filteredUsers.map((user: User) => (
                            <li key={user.username} className='search-item'>
                                <div className='search-item-username'>Username : {user.username}</div>
                                <div className='search-item-details'>Age : {user.age}</div>
                                <div className='search-item-details'>Bloodgroup : {user.bloodgroup}</div>
                                <div className='search-item-details'>Location : {user.location}</div>
                                <div className='search-item-details'>Available from : {user.donoravailon}</div>
                                <div className='search-item-details'>Telegram Link : {user.telegramlink}</div>
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