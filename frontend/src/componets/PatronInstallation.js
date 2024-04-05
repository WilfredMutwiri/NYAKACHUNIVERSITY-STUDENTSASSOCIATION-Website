import patronImg from '../images/patronImg.webp'
const PatronInstallation = () => {
    return ( 
        <div>
            <div class="w-full bg-gray-100 pt-10 pb-10">
            <div class="w-11/12 m-auto">
            <div class="block md:flex">
            <div>
                <img src={patronImg} alt="PatronImg"/>
            </div>
            <div class="ml-0 md:ml-10 w-9/12 m-auto">
                <h2 class="font-semibold text-orange-500 text-lg pb-4 pt-4 md:pt-0">The installation of Professor Onywera </h2>
                <p class="leading-relaxed">
                On February 17, 2024, Professor Vincent Onywera assumed the esteemed 
                position of the second honorary patron of NUSA, succeeding the late Professor Makawiti.
                This significant appointment marked a continuation of academic stewardship within the
                association, as Professor Onywera steps into a role previously held by a respected
                predecessor. As the new patron, Professor Onywera brings with him a wealth of experience
                and knowledge, poised to guide NUSA in its endeavors and uphold its core values.
                </p>
            </div>
            </div>
           <p class="leading-relaxed pt-5">
           The installation of Professor Onywera as NUSA's honorary patron underscores the
           organization's commitment to excellence and leadership in academia. His appointment
           serves as a testament to his standing within the academic community and his dedication to
           advancing scholarly pursuits. By assuming this role, Professor Onywera assumes a position
           of influence and responsibility, tasked with nurturing the next generation of scholars and
           fostering a culture of academic excellence within NUSA.<br/>
           </p>
           <p class="leading-relaxed pt-5">
           With Professor Onywera at the helm as NUSA's honorary patron, the organization enters a
            new chapter characterized by continuity and innovation. His leadership promises to steer
            NUSA towards greater achievements and reinforce its position as a beacon of academic excellence.
            As the torchbearer of NUSA's values and aspirations, Professor Onywera's installation marked
            a momentous occasion in the organization's history, signaling a bright future under his guidance.
           </p>
           <p class="pt-5">
           To learn more concerning our patron, kindly visit <a class="text-blue-700" href='https://www.kcau.ac.ke/personnel/prof-vincent-o-onywera-phd-isak2/' target='_blank'>here!</a>
           </p>
            </div>
            </div>
        </div>
     );
}
 
export default PatronInstallation;