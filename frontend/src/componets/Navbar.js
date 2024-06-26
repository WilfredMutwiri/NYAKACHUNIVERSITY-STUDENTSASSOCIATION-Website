import {Link} from 'react-router-dom'
import {useRef} from "react";
import logo from "../images/logo.webp"
const Navbar = () => {
    const openNav=useRef(null)
    const navMenu=useRef(null)
    const closeNav=useRef(null)
    const OpenDropdown=useRef(null)
    const dropdown=useRef(null)

    const OpenDropdown2=useRef(null)
    const dropdown2=useRef(null)

    const HandleDropdown=()=>{
        if(OpenDropdown.current && dropdown.current){
            dropdown.current.style.display="block"
        }
    }

    const HandleDropdown2=()=>{
        if(OpenDropdown2.current && dropdown2.current){
            dropdown2.current.style.display="block"
        }
    }

    const LeaveDropdown=()=>{
        if(OpenDropdown.current && dropdown.current){
            dropdown.current.style.display=""
        }
    }

    const LeaveDropdown2=()=>{
        if(OpenDropdown2.current && dropdown2.current){
            dropdown2.current.style.display=""
        }
    }

    const handleOpenNav=()=>{
        if(openNav.current && navMenu.current){
            navMenu.current.style.display="block"
            closeNav.current.style.display="block"
            openNav.current.style.display="none"
        }
    }
    const handleCloseNav=()=>{
        if(closeNav.current && navMenu.current){
            navMenu.current.style.display="none"
            closeNav.current.style.display="none"
            openNav.current.style.display="block"
        }
    }
    
    const loginClick=()=>{
        alert("Page not Available...site still under development")
    }
    return (
        <div class="">
            <div class="w-full p-3 bg-blue-950 z-50 relative">
            <div class="w-11/12 block md:flex justify-between">
            <div class="flex justify-between">
            <img class="h-10 rounded-full" src={logo} alt="logoImg"/>
            <svg onClick={handleOpenNav} ref={openNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="visible md:hidden h-8 text-white cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            </div>
            <ul ref={navMenu} class="block md:flex">
            <Link to="/"><li class="navLi">Home</li></Link>
            <Link to="/About"><li class="navLi justify-center">
            <div class="flex">
            Who We Are 
            <svg onMouseEnter={HandleDropdown} ref={OpenDropdown}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-500 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            </div>
            <div ref={dropdown} onMouseLeave={LeaveDropdown} class="hidden bg-gray-800 p-4 -ml-4 shadow-sm shadow-white">
            <Link to="/About"><li class="">Who We Are</li></Link>
            <Link to="/PatronInstallation"><li class="">Installation Of New Patron</li></Link>
            <Link to="/Team"><li class="">Our Team</li></Link>
            </div>
            </li></Link>
            <Link><li class="navLi">
            <div class="flex">
            Join Us
            <svg onMouseEnter={HandleDropdown2} ref={OpenDropdown2}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-500 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            </div>
            <div ref={dropdown2} onMouseLeave={LeaveDropdown2} class="hidden bg-gray-800 p-4 -ml-4 shadow-sm shadow-white">
            <Link to="/JoinUS"><li class="">Join Us</li></Link>
            <Link to="/FAQ"><li class="">FAQs</li></Link>
            </div>         
            </li></Link>
            <Link to="Events"><li class="navLi">Events</li></Link>
            <Link to="News"><li class="navLi">News</li></Link>
            <Link to="Contacts"><li class="navLi mr-0 md:mr-5 mb-5 md:mb-0">contact</li></Link>
            <Link><li onClick={loginClick} class="text-center bg-orange-500 text-white ml-0 md:ml-5 p-2 -mt-1 hover:bg-black shadow-sm shadow-gray-50 cursor-pointer">Login</li></Link>
            </ul>
            <svg ref={closeNav} onClick={handleCloseNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="visible md:hidden h-7 m-auto mt-4 text-red-600 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
            </div>
        </div>
    );
}
 
export default Navbar;