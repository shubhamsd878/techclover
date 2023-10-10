"use client";
import React, { useEffect, useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { IoOptionsOutline } from 'react-icons/io5'
// import {IoIosOptions} from "react-icons/io"
import { CiSearch } from 'react-icons/ci'
import './Navbar.scss'
import { Link } from "next/link";

const Navbar = () => {
    const [active, setActive] = useState('/')
    // eslint-disable-next-line
    useEffect(()=> {
        const pathname = window.location.pathname
        setActive(pathname)
    }, [])

    return (
        <>
            <div className="Navbar d-flex justify-content-between align-items-center px-3">
                <div>
                    {/* <img className='wasserstoffLogo' src={'https://www.thewasserstoff.com/images/logo-top.png'} alt=''></img> */}
                    <img className='wasserstoffLogo' src={'/images/Logo.png'} alt=''></img>
                    {/* <p className='logo-text d-inline mx-1'>Techclover</p> */}
                </div>

                {/* <div className='search d-flex align-items-baseline'>
                    <input type="text" className="search-box" />
                        <CiSearch className="mx-2" size={15} />
                </div> */}

                <div className="nav-items d-flex">
                    <a href='/' onClick={()=>{setActive('/')}} className={`mx-3 ${active == '/' ? 'active' : 'text-muted'}`}>Home</a>
                    <a href="/about" onClick={()=>{setActive('/about')}} className={`mx-3 ${active == '/about' ? 'active' : 'text-muted'}`} >About</a>
                    <a href='/marketroles' onClick={()=>{setActive('/marketroles')}} className={`mx-3 ${active == '/marketroles' ? 'active' : 'text-muted'}`} >Market & Roles</a>
                    <a href='/serviceportfolio' onClick={()=>{setActive('/serviceportfolio')}} className={`mx-3 ${active == '/serviceportfolio' ? 'active' : 'text-muted'}`} >Services & Porfolio</a>
                    <a href='/contact' onClick={()=>{setActive('/contact')}} className={`mx-3 ${active == '/contact' ? 'active' : 'text-muted'}`} >Contact</a>
                </div>

                {/* <div className="profile-nav-items">
                    <span className='mx-3'><FiUser size={22} /></span>
                    <span className='mx-3'><IoOptionsOutline size={22} /></span>
                </div> */}
            </div>
        </>
    )
}

export default Navbar