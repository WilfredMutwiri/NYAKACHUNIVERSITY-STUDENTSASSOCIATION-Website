import aboutImg from '../images/about.webp'
const About = () => {
    return (
        <div>
            <div class="w-full bg-gray-100">
            <div class="w-11/12 m-auto pt-10">
            <div class="block md:flex">
            <div>
                <img class="" src={aboutImg} alt='aboutImg'/>
            </div>
            <div class="ml-0 md:ml-10 w-9/12 m-auto p-3">
                <h2 class="text-orange-500 font-semibold text-lg">Get To Know Us!</h2>
                <p class="leading-relaxed">
                The Nyakach University Student Association (NUSA) has the following objectives:-<br/>
                To establish an efficient, accountable and transparent student organization which seeks and undertakes representation and/or participation in organs of the Constituents alongside it's University Students.<br/>
                To work in close solidarity with other students organizations within the Jurisdiction and tapestry of Kisumu County and Nyakach Constituency neighborhood environs and establish friendly relations and understanding with other relevant organizations.<br/>
                To seek, enhance and maintain freedom of conscience, expression, association, academic liberty and all rights occurring to students and to promote employment of the same.<br/>
                </p>
            </div>
            </div>
            <p class="pt-10">
            To promote student welfare, work hand in hand with Kisumu County and Nyakach  Constituency administration and other bodies concerned with enhancement of students’ standard of living and undertake any other activity which does not conflict with the
            constitution of NUSA or any law or regulation in force in which is beneficial to the members.
            </p>
            <div class="block md:flex pt-10 pb-10">
            <div class="w-11/12 bg-gray-200 p-3 rounded-md shadow-sm shadow-blue-600 mr-0 md:mr-3">
                <h2 class="text-orange-500 font-semibold text-center pb-3">Our Mission</h2>
                <p class="leading-relaxed">
                To make the most of our university years, engaging in rigorous academics, exploring diverse interests, and contributing positively to our community.
                The NUSA body also seeks to help our constituents students to develop an understanding and appreciation for the complex cultural and physical worlds in which they live and to realize their highest potential of intellectual, physical and human development.
                To be the most creative organization in the world.
                </p>
            </div>
            <div class="w-11/12 bg-gray-200 p-3 rounded-md shadow-sm shadow-blue-600 ml-0 md:ml-3 mt-6 md:mt-0">
                <h2 class="text-orange-500 font-semibold text-center pb-3">Our Vision</h2>
                <p class="leading-relaxed">
                Student Activities will be organisations leader for inclusive and innovative student programming through:
                Leadership, Service and Student Organizations<br/>
                Campus Events<br/>
                Graduate and Professional Student Engagement<br/>
                Students: Building on a strong foundation of theory and research to engage undergraduate, graduate and professional students in meaningful opportunities that enhance their academic experience.<br/>
                Staff: Establishing Student Activities as a professional destination of choice where the PATRON ( Proff. Wuod Meressa)members thrive.<br/>
                Strategy: Incorporating strategy into regular practice and engage all members in developing, assessing and reformulating on-going strategic priorities<br/>
                Structure: Optimizing organizational structure and processes to better serve everybody including the Alumni's.
                </p>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
}
 
export default About;