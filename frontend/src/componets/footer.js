import logo from "../images/logo.webp"
import { Link } from "react-router-dom";
import fbIcon from '../images/facebook-1-svgrepo-com.svg'
import InstagramIcon from '../images/instagram-1-svgrepo-com.svg'
import LinkedIn from '../images/linkedin-icon-svgrepo-com.svg'
import whatsapIcon from '../images/whatsapp-svgrepo-com.svg'
const Footer = () => {
    return (
        <div class="w-full bg-black">
            <div class="w-10/12 m-auto pt-10 pb-10 text-white block md:flex justify-between">
            <div>
            <img class="h-10 rounded-full" src={logo} alt="logoImg"/>
            <h2 class="pt-2">Nyakach University Students Association</h2>
            <p class="italic text-orange-500">Improving Lives</p>
            <div class="flex pt-5">
            <a href="https://www.facebook.com/people/Nyakach-University-Students-Association-NUSA/100070324922543/" target="_blank"><img src={fbIcon} class="w-7 mr-2" alt="facebook Icon"/></a>
                <img src={InstagramIcon} class="w-7 mr-2" alt="Instagram Icon"/>
                <img src={LinkedIn} class="w-7 mr-2" alt="LinkedIn Icon"/>
                <img src={whatsapIcon} class="w-7" alt="whatsappIcon"/>
            </div>
            <button class="mt-4 bg-gradient-to-r from-blue-700 to-orange-500 p-2 rounded-md font-semibold"><a href="https://drive.google.com/file/d/1BaP1s5431QWEywwJT6meQrE0I5e6maXp/view?usp=sharing" target="_blank">Get Our Constitution</a></button>
            </div>
            <div class=" pt-5 md:pt-0 pl-0 md:pl-10">
            <h2 class="text-lg">Quick Links</h2>
            <ul class="text-orange-500">
            <Link><li>Home</li></Link>
            <Link><li>Who We Are</li></Link>
            <Link><li>Join Us</li></Link>
            <Link><li>Events</li></Link>
            <Link><li>News</li></Link>
            <Link><li>contact</li></Link>
            </ul>
            </div>
        <div class="pl-0 md:pl-10 pt-5 md:pt-0">
        <h2 class="text-normal md:text-lg text-white pb-3">Get In Touch</h2>
        <div class="flex text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <p class="">
        Baraton<br/>Near Kapsabet,<br/>Nandi County,<br/>Kenya
        </p>
        </div>
        <div class="flex pt-3 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-700 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        <p class="">
        +254 700 000 000
        </p>
        </div>
        <div class="text-white pt-3 flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-pink-600 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        <p class="">
            nusa@gmail.com
        </p>
        </div>
        </div>
        </div>
        <hr class="mt-5"/>
        <div class="w-full md:w-96 m-auto mt-5 pb-5 text-red-600">
        <p class="text-center">
            &copy;nusa. 2024 All rights reserved.
        </p>
        </div>   
        </div>

    );
}
 
export default Footer;