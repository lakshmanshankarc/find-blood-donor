import { Link, useRouteError } from "react-router-dom";

export default function ErootPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div className=" w-full h-screen font-ubuntu flex justify-center items-center flex-col rounded-xl shadow-xl bg-gradient-to-b from-purple-100 to-green-100">
            <h1 className=" text-9xl text-pink-600 "> Error Page</h1>
            <p className=" text-3xl font-rale"> 😋 Oops! The Page You're Looking is not found</p>
            <i> First Blood Donor Application 🙂   </i>
        </div>
    );
}