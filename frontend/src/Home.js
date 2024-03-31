import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
        <div className='bg'>
         <div class="mt-10 md:mt-0 absolute inset-0 items-center justify-center overflow-hidden">
         <div class="m-auto w-full md:w-9/12 pt-36 md:pt-44 p-10 font-sans">
         <h2 class="text-white text-5xl md:text-6xl font-bold text-center pt-8">Improving Lives!</h2>
         <p class="text-center pt-10 leading-relaxed text-white text-lg">
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Ad nostrum eos aut tempora ea, deserunt 
            rerum animi consectetur impedit quis!
         </p>
         <div class="w-60 md:w-80 mt-6 md:mt-12 m-auto flex">
          <button class="bg-gradient-to-r from-blue-950 text-white to-orange-500 p-2 shadow-sm shadow-black rounded-md mr-2 md:mr-4 text-normal md:text-lg w-36 md:w-32 text-center hover:bg-black"><Link to="/about">Learn More</Link></button>
          <button class="bg-gradient-to-r from-blue-950 text-white to-orange-500 p-2 shadow-sm shadow-black rounded-md ml-2 md:ml-4 text-normal md:text-lg w-36 md:w-32 text-center"><a href="#contacts">Join Us</a></button>
         </div>
         </div>
         </div>
        </div>
        {/* mission,vission section */}
        <div class="w-full bg-gradient-to-r from-gray-200 to-gray-400 pt-14 md:pt-28 pb-20">
            <div class="block md:grid grid-cols-2 w-11/12 md:w-10/12 m-auto">
            <div class="bg-gray-100 p-4 rounded-md shadow-sm shadow-blue-800  mr-0 md:mr-3">
                <h2 class="text-center text-lg pb-3 text-orange-500 font-semibold">Our Mission</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, maiores.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus
                    laborum numquam quasi at facilis quia magni atque cupiditate consequuntur!
                </p>
                <h2 class="text-center text-blue-800 pt-3">Read More</h2>
            </div>
            <div class="bg-gray-100 p-4 rounded-md shadow-sm shadow-blue-800 mt-5 md:mt-0 ml-0 md:ml-3">
                <h2 class="text-center text-lg pb-3 text-orange-500 font-semibold">Our Vision</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, maiores.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus
                    laborum numquam quasi at facilis quia magni atque cupiditate consequuntur!
                </p>
                <h2 class="text-center text-blue-800 pt-3">Read More</h2>
            </div>
            </div>
            <div class="block md:grid grid-cols-2 w-11/12 md:w-10/12 m-auto pt-10">
            <div class="bg-gray-100 p-4 rounded-md shadow-sm shadow-blue-800 mr-0 md:mr-3">
                <h2 class="text-center text-lg pb-3 text-orange-500 font-semibold">Latest News</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, maiores.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus
                    laborum numquam quasi at facilis quia magni atque cupiditate consequuntur!
                </p>
                <h2 class="text-center text-blue-800 pt-3">Read More</h2>
            </div>
            <div class="bg-gray-100 p-4 rounded-md shadow-sm shadow-blue-800 mt-5 md:mt-0 ml-0 md:ml-3">
                <h2 class="text-center text-lg pb-3 text-orange-500 font-semibold">Join Us</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, maiores.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus
                    laborum numquam quasi at facilis quia magni atque cupiditate consequuntur!
                </p>
                <h2 class="text-center text-blue-800 pt-3">Read More</h2>
            </div>
            </div>
        </div>
        </div>
    );
}
 
export default Home;