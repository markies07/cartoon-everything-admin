import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import email from '../assets/icons/email.svg'
import password from '../assets/icons/password.svg'
import google from '../assets/icons/google.svg'
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleGoogleLogin = async () => {
        setLoading(true);
        
        const provider = new GoogleAuthProvider();
        
        // Add custom parameters to potentially help with COOP issues
        provider.setCustomParameters({
            prompt: 'select_account'
        });

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Check email domain
            if (user.email && user.email.endsWith("@bestsystemsjobs.com")) {
                toast.success("Login Successful!");
                navigate("/dashboard");
            } else {
                toast.error("You are not authorized to access this site.");
                await auth.signOut();
            }
        } catch (err) {
            toast.error("There's a problem logging in. Please try again later.");
            console.error("Auth error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex w-full h-screen justify-center items-center font-poppins text-dark'>
            <div className='p-5 w-[90%] sm:w-[27rem] rounded-2xl bg-lightgray'>

                {/* LOGO */}
                <div className='flex items-center justify-center gap-3'>
                    <img className='w-7' src={logo} alt="" />
                    <h1 className='font-black leading-4 text-md text-secondary'>Cartoon <br /> <span className='text-primary'>Everything</span></h1>
                </div>

                <h1 className='text-center text-xl font-bold py-5'>Admin Dashboard</h1>

                <div className='flex flex-col gap-4 py-3 text-sm'> 
                    <div className='flex flex-col gap-1'> 
                        <p className='font-medium'>Email:</p> 
                        <div className='flex w-full relative'> 
                            <input className='bg-white rounded-lg pl-12 p-3 outline-none w-full' placeholder='Enter your email' type="text" /> 
                            <div className='absolute top-0 left-0 h-full flex justify-center pl-4'> 
                                <img className='w-5' src={email} alt="" /> 
                            </div> 
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'> 
                        <p className='font-medium'>Password:</p> 
                        <div className='flex w-full relative'> 
                            <input className='bg-white rounded-lg pl-12 p-3 outline-none w-full' placeholder='Enter your password' type="password" /> 
                            <div className='absolute top-0 left-0 h-full flex justify-center pl-4'> 
                                <img className='w-4' src={password} alt="" /> 
                            </div> 
                        </div> 
                    </div> 
                </div>

                {/* LOGIN / LOGIN WITH GOOGLE */} 
                <div className=' text-sm'> 
                    {/* LOGIN */} 
                    <button className='bg-gradient-to-r from-secondary to-primary cursor-pointer hover:brightness-110 duration-150 w-full py-3 rounded-md font-medium text-white'>LOGIN</button> 
                    <div className='flex justify-center items-center py-2'> 
                        <div className='h-[1px] w-full bg-[#969696]' /> 
                        <p className='px-2 text-xs font-medium text-[#808080]'>OR</p> 
                        <div className='h-[1px] w-full bg-[#969696]' /> 
                    </div>
                </div>

                {/* LOGIN WITH GOOGLE */}
                <div className='text-sm'>
                    <button 
                        onClick={handleGoogleLogin} 
                        disabled={loading}
                        className='bg-white w-full py-3 rounded-md font-medium flex cursor-pointer hover:bg-[#e4e4e4] duration-150 gap-3 justify-center items-center text-dark disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        <img className='w-5' src={google} alt="" />
                        {loading ? 'Signing in...' : 'Continue with Google'}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Login