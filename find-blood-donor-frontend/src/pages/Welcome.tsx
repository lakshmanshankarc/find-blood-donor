import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r  from-pink-500 to-yellow-100">
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="rounded-full animate-pulse bg-white"></div>
                </div>
                <div className="relative z-10">
                    <h1 className="text-4xl lg:text-9xl text-center text-white font-bold mb-4"> Find Blood Donor</h1>
                    <label htmlFor="my-modal" className="btn p-2 px-10">More</label>
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal  bg-gradient-to-r from-green-300 to-purple-200">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Welcome to Find Donor Application</h3>
                            <p className="py-4">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis ea tenetur doloremque pariatur! Iure perspiciatis qui laborum corporis saepe laudantium maxime numquam neque, vitae minima, illum quos? Maiores, nihil placeat.
                            </p>
                            <div className="modal-action ">
                                <label htmlFor="my-modal" className="btn bg-red-600 text-black hover:text-slate-200 hover:bg-red-700"> Close</label>
                            </div>
                        </div>
                    </div>
                    <Link to="/login" className="bg-white text-fuchsia-500 font-bold py-3.5 ml-10 px-10 rounded-md  hover:bg-fuchsia-500 hover:text-white transition-all duration-300 ease-in-out group">
                        <span className="mr-2 p-5 ">Login</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Welcome;

