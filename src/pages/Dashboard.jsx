import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Dashboard() {
    // const navigate = useNavigate();

    // const handleLogout = async () => {
    //     try {
    //         await signOut(auth);
    //         navigate("/"); 
    //     } catch (error) {
    //         console.error("Logout failed: ", error.message);
    //     }
    // };

    return (
        <div className='font-poppins'>
            <Header />
            {/* <Sidebar /> */}
        </div>
    )
}

export default Dashboard