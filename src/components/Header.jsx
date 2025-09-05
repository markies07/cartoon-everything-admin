import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import close from '../assets/icons/close.svg'
import logout from '../assets/icons/logout.svg'


function Header() {
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);

    const handleLogoutTab = () => {
        setIsLogoutOpen(!isLogoutOpen);
    }

    return (
        <header className='flex bg-lightgray p-3 lg:m-2 lg:rounded-lg'>
            <div className='flex justify-between w-full items-center'>
                {/* LOGO */}
                <div className='flex items-center justify-center gap-3 lg:hidden'>
                    <img className='w-7' src={logo} alt="" />
                    <h1 className='font-black leading-4 text-md text-secondary'>Cartoon <br /> <span className='text-primary'>Everything</span></h1>
                </div>

                {/* GREETINGS */}
                <div className='hidden lg:block'>
                    <h1 className='font-black text-xl bg-gradient-to-b from-secondary to-primary text-transparent bg-clip-text'>Good day, Mark</h1>
                </div>

                {/* PROFILE */}
                <div className='flex relative'>
                    <img onClick={handleLogoutTab} className='bg-dark w-10 h-10 rounded-full overflow-hidden cursor-pointer lg:cursor-default' src="" alt="" />

                    {/* DESKTOP VIEW */}
                    <div className='pl-2 flex-col justify-center hidden lg:flex'>
                        <h3 className='text-sm font-semibold leading-4'>Mark Christian</h3>
                        <p className='text-xs text-[#616161]'>mark.naval@bestsystemjobs...</p>
                    </div>

                    {/* MOBILE VIEW LOGOUT */}
                    <div className={`${isLogoutOpen ? 'block' : 'hidden'} absolute top-0 right-0 bg-white w-52 shadow-xl rounded-lg`}>
                        <div className='relative p-3 pt-5 w-full h-full flex justify-center flex-col items-center'>
                            <img onClick={handleLogoutTab} className='absolute top-3 right-3 w-5 cursor-pointer' src={close} alt="" />
                            {/* PROFILE */}
                            <img className='bg-dark w-12 h-12 rounded-full overflow-hidden' src="" alt="" />
                            {/* NAME */}
                            <h3 className='py-2 font-semibold'>Mark Christian</h3>

                            {/* LOGOUT */}
                            <button className='flex gap-2 mt-2 bg-primary w-full text-white justify-center py-3 rounded-lg'>
                                <img className='w-5' src={logout} alt="" />
                                <p className='text-sm'>Logout</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header