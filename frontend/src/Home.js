import { Link } from "react-router-dom";
import eventsImg from './images/events.webp'
import missionIcon from './images/target.png'
import visionIcon from './images/opportunity.webp'
import newsIcon from './images/megaphone.webp'
import joinUsIconn from './images/deal.webp'
const Home = () => {
    const observer=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show')
            }else{
                entry.target.classList.remove('show')
            }
        });
    });

    const hiddenElements=document.querySelectorAll('.hidden')
    hiddenElements.forEach((el)=>observer.observe(el));
    return (
        <div>
        <div className='bg'>
         <div class="mt-10 md:mt-0 absolute inset-0 items-center justify-center overflow-hidden">
         <div class="m-auto w-full md:w-9/12 pt-28 md:pt-44 p-10 font-sans">
         <h2 class="text-white text-5xl md:text-6xl font-bold text-center pt-8">Improving Lives!</h2>
         <p class="text-center pt-10 leading-relaxed text-white text-lg font-semibold">
         We aim at establishing an efficient, accountable and transparent student organization which seeks
         and undertakes representation and/or participation in organs of the Constituents alongside
         it's University Students.
         </p>
         <div class="w-auto justify-center items-center flex mt-10">
          <button class="bg-gradient-to-r from-blue-950 text-white to-orange-500 p-2 shadow-sm shadow-black rounded-md mr-2 md:mr-4 text-normal md:text-lg w-auto md:w-32 text-center hover:bg-black"><Link to="/about">Learn More</Link></button><br/>
          <button class="bg-gradient-to-r from-blue-950 text-white to-orange-500 p-2 shadow-sm shadow-black rounded-md ml-2 md:ml-4 text-normal md:text-lg w-auto md:w-32 text-center"><a href="https://docs.google.com/forms/d/e/1FAIpQLSf9iSUN_-Tqw7AAHpVbEz8-3c1-mGeoNeM5vlQevydI3IyXdA/viewform" target="_blank">Join Us</a></button><br/>
          <button class="bg-gradient-to-r from-blue-950 text-white to-orange-500 p-2 shadow-sm shadow-black rounded-md ml-2 md:ml-4 text-normal md:text-lg w-auto md:w-auto text-center"><a href="https://drive.google.com/file/d/1BaP1s5431QWEywwJT6meQrE0I5e6maXp/view?usp=sharing" target="_black">View Constitution</a></button>
         </div>
         </div>
         </div>
        </div>
        {/* mission,vission section */}
        <div class="w-full bg-gradient-to-r from-gray-200 to-gray-400 pt-14 md:pt-28 pb-20">
            <div class="block md:grid grid-cols-2 w-11/12 md:w-10/12 m-auto">
            <div class="bg-gray-100 p-4 rounded-md shadow-sm shadow-blue-800  mr-0 md:mr-3 hover:bg-black hover:text-white">
            <img class="w-10 m-auto mb-2" src={missionIcon} alt="missionIcon" />
                <h2 class="text-center text-lg pb-3 text-orange-500 font-semibold">Our Mission</h2>
                <p class="leading-relaxed">
                To make the most of our university years, engaging in rigorous academics,
                exploring diverse interests, and contributing positively to our community...
                </p>
                <h2 class="text-center text-blue-800 pt-3 cursor-pointer"><a href="/About">Read More</a></h2>
            </div>
            <div class="bg-gray-100 p-4 rounded-md shadow-sm shadow-blue-800 mt-5 md:mt-0 ml-0 md:ml-3 hover:bg-black hover:text-white">
            <img class="w-10 m-auto mb-2" src={visionIcon} alt="visionImg"/>
                <h2 class="text-center text-lg pb-3 text-orange-500 font-semibold">Our Vision</h2>
                <p class="leading-relaxed">
                Student Activities will be organisations leader for inclusive and innovative student programming through:
                Leadership, Service and Student Organizations,Campus Events,Graduate and Professional Student Engagement...
                
                </p>
                <h2 class="text-center text-blue-800 pt-3 cursor-pointer"><a href="/About">Read More</a></h2>
            </div>
            </div>
            <div class="block md:grid grid-cols-2 w-11/12 md:w-10/12 m-auto pt-10">
            <div class="bg-gray-100 p-4 rounded-md shadow-sm shadow-blue-800 mr-0 md:mr-3 hover:bg-black hover:text-white">
            <img class="w-10 m-auto mb-2" src={newsIcon} alt="newsIcon"/>
                <h2 class="text-center text-lg pb-3 text-orange-500 font-semibold">Latest News</h2>
               <img id="eventsImg" class="h-40 hover:h-96 justify-center" src={eventsImg} alt="eventsImg"/>
               <p>
                visit our facebook page <a class="text-blue-600 hover:text-orange-500" href="https://www.facebook.com/people/Nyakach-University-Students-Association-NUSA/100070324922543/" target="_blank">here</a> for more events and updates
               </p>
            </div>
            <div class="bg-gray-100 p-4 rounded-md shadow-sm shadow-blue-800 mt-5 md:mt-0 ml-0 md:ml-3 hover:bg-black hover:text-white">
            <img class="w-10 m-auto mb-2" src={joinUsIconn} alt="joinUsIcon" />
                <h2 class="text-center text-lg pb-3 text-orange-500 font-semibold">Join Us</h2>
                <p>
                We are a huge family and always welcome to new members. To join us is simple, just click the link 
                below to get started by filling our online form!
                </p>
                <h2 class="text-center text-blue-800 pt-3"><a href="https://docs.google.com/forms/d/e/1FAIpQLSf9iSUN_-Tqw7AAHpVbEz8-3c1-mGeoNeM5vlQevydI3IyXdA/viewform">Join Us</a></h2>
            </div>
            </div>
        </div>
   
        </div>
    );
}
 
export default Home;