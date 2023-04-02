import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    //Mobile Responsive Navbar
    const [nav, setNav] = useState(false)
    const handleNavbar = () => {
        setNav(!nav)
    }

    const [navColor, setNavColor] = useState(false)
    const navBg = () => {
        if (window.scrollY >= 95) {
            setNavColor(true)
        } else {
            setNavColor(false)
        }
    }
    window.addEventListener('scroll', navBg)

    // bg-[#66BFBF] w-full h-[80px] fixed top-0 z-30
    return (
        <div className={navColor ? 'w-full h-[80px] fixed top-0 z-30 duration-700 bg-black/90' : 'w-full h-[80px] fixed top-0 z-30 duration-700'}>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
                <div className='uppercase text-xl font-bold text-[#EAF6F6]'>Vacation Villa.</div>
                <div className='hidden md:block'>
                    <div className='flex text-white items-center cursor-pointer'>
                        <div className='flex justify-around w-96'>
                            <a href="">Home</a>
                            <a href="">Services</a>
                            <a href="">About</a>
                            <a href="">Contact</a>
                        </div>
                        {/* <button className='text-black'>SignIn</button> */}
                        <div className='md:flex items-center bg-black border cursor-pointer rounded-full w-[9rem] text-[14px]'>
                            <p className='bg-[#EAF6F6] text-black rounded-full py-2 px-4 font-bold'>Login</p>
                            <p className='px-3 font-bold text-white'>SignUp</p>
                        </div>
                    </div>
                </div>
                <div onClick={handleNavbar} className='block md:hidden cursor-pointer text-white'>
                    {/* {nav ? <AiOutlineClose size={25} className='text-cyan-500' /> : <AiOutlineMenu size={25} className='text-cyan-500' />} */}
                    {nav ? '' : <GiHamburgerMenu />}
                </div>
                <div className={nav ? 'w-44 h-screen duration-700 bg-black/70 text-white absolute top-0 right-0 flex flex-col text-center' : 'absolute right-[-100%] top-0 flex flex-col text-center h-screen w-full bg-black opacity-100 duration-1000'}>
                    <div onClick={handleNavbar} className='cursor-pointer mr-auto pl-1 pt-1'>{nav ? <AiOutlineClose /> : <AiOutlineClose />}</div>
                    <div className='flex flex-col my-3 py-12'>
                        <a href="" className='py-3'>Home</a>
                        <a href="" className='py-3'>Services</a>
                        <a href="" className='py-3'>About</a>
                        <a href="" className='py-3'>Contact</a>
                    </div>
                    {/* <button className='text-black w-28 mx-auto mb-2'>SignIn</button> */}
                    <div className='flex items-center bg-black border cursor-pointer rounded-full ml-4 w-[9rem] text-[14px]'>
                        <p className='bg-[#EAF6F6] text-black rounded-full px-4 py-2 font-bold'>Login</p>
                        <p className='px-3 font-bold text-white'>SignUp</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
