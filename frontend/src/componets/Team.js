import patronImg from '../images/patron.jpeg'
import chairmanImg from '../images/Chairman.webp'
import secretaryImg from '../images/secretary.webp'
import TreasurerImg from '../images/Treasurer.webp'
import spokesPersonImg from '../images/spokesperson.webp'
import externalAffairs from '../images/externalAffairs.webp'
const Team = () => {
    return (
        <div>
            <div class="w-full bg-gradient-to-r from-gray-100 to-orange-100 pt-10 pb-10">
            <div class="w-full md:w-10/12 m-auto">
            <h2  class="text-center font-semibold text-lg text-orange-500">Meet Our Team</h2>
            {/* first team grid */}
            <div class="block md:grid grid-cols-3 pt-5" id='grid1'>
            <div class="mb-10 md:mb-0 w-52 m-auto">
            <img class="w-52 m-auto object-contain" src={patronImg} alt='Patron Img'/>
            <div class="bg-gray-300 m-auto p-2">
            <h2 class="text-orange-500">Prof.Vincent  O. Onywera Ph.D, ISAK 2</h2>
            <span class="text-blue-700">Patron</span>
            </div>
            </div>
            <div class="w-52 m-auto mb-10 md:mb-0">
            <img class="h-72 m-auto rounded-md object-cover" src={chairmanImg} alt='chairperson Img'/>
            <div class="bg-gray-300 m-auto p-2">
            <h2 class="text-orange-500">Mr. Ochieng Leakey O</h2>
            <span class="text-blue-700">ChairPerson</span>
            </div>
            </div>
            <div class="w-52 m-auto mb-10 md:mb-0">
            <img class="w-full h-72 object-cover m-auto rounded-md" src={secretaryImg} alt='Secretary Img'/>
            <div class="bg-gray-300 m-auto p-2">
            <h2 class="text-orange-500">Kisero Kennedy</h2>
            <span class="text-blue-700">Organizing Secretary</span>
            </div>
            </div>
            </div>
            {/* second team grid */}
            <div class="block md:grid grid-cols-3 pt-0 md:pt-12" id='grid2'>
            <div class="w-52 m-auto mb-10 md:mb-0">
            <img class="h-96 w-52 object-cover m-auto rounded-md" src={TreasurerImg} alt='Treasurer Img'/>
            <div class="bg-gray-300 m-auto p-2">
            <h2 class="text-orange-500">Pavine Dondi</h2>
            <span class="text-blue-700">Treasurer</span>
            </div>
            </div>
            <div class="w-52 m-auto mb-10 md:mb-0">
            <img class="h-96 w-52 object-cover m-auto rounded-md" src={spokesPersonImg} alt='Spokesperson Img'/>
            <div class="bg-gray-300 m-auto p-2">
            <h2 class="text-orange-500">Stephen Obiero</h2>
            <span class="text-blue-700">SpokesPerson</span>
            </div>
            </div>
            <div class="w-52 m-auto mb-5 md:mb-0">
            <img class="h-96 w-52 object-cover m-auto rounded-md" src={externalAffairs} alt='externalAffairs Img'/>
            <div class="bg-gray-300 m-auto p-2">
            <h2 class="text-orange-500">Mitchelle Ochieng</h2>
            <span class="text-blue-700">External Affairs</span>
            </div>
            </div>
            </div>
            <p class="text-center pt-5 pb-5">We are a full house! Wish to be part of us? Kindly fill the <a class="text-orange-600" href='https://docs.google.com/forms/d/e/1FAIpQLSf9iSUN_-Tqw7AAHpVbEz8-3c1-mGeoNeM5vlQevydI3IyXdA/viewform' target='_blank'>form here</a> and we will get back to you as soon as possible!</p>
            </div>
            </div>
        </div>
    );
}
 
export default Team;