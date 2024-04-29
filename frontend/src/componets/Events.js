import treeplantingImg from '../images/treePlanting1.webp'
import treeplantingImg2 from '../images/TreePlanting2.webp'
const Events = () => {
    return (
        <div class="w-full bg-gray-100 pt-10 pb-10">
            <section>
            <div class="w-11/12 m-auto">
                <h2 class="text-xl text-orange-500 font-semibold">~~Our Events</h2>
                <p class="leading-relaxed pt-5">
                Student organizations are vibrant hubs of activity on campuses
                worldwide, offering students a platform to explore their interests, develop
                leadership skills, and build lasting connections. These organizations host a
                myriad of events throughout the academic year, ranging from academic conferences
                and workshops to social gatherings and community service initiatives.
                </p>
                <p class="leading-relaxed pt-5">
                Academic events, such as seminars and guest lectures, provide
                students with opportunities to expand their knowledge beyond the
                classroom, engage with experts in various fields, and gain insights
                into emerging trends and research areas. Workshops and skill-building sessions
                equip students with practical skills, from public speaking to project management,
                enhancing their professional development and employability.
                </p>
                <p class="leading-relaxed pt-5">
                Fostering a sense of belonging and camaraderie among members.
                These events create spaces for students to unwind, connect with peers
                from diverse backgrounds, and celebrate their shared interests and identities.
                </p>
                <p class="leading-relaxed pt-5">
                Community service projects are another cornerstone of student organization
                activities, allowing students to make a positive impact on their local communities
                and beyond. Whether it's organizing food drives, volunteering at shelters, or participating
                in environmental initiatives, these events instill values of empathy, social responsibility,
                and civic engagement in students.
                </p>
                <div class="w-10/12 m-auto pt-5">
                    <h2 class="italic text-orange-500 text-center pb-5">Tree planting</h2>
                    <div class="block md:flex">
                        <img class="h-96 w-96 object-contain" src={treeplantingImg} alt='treeplantingImg'/>
                        <img class="w-96 object-cover" src={treeplantingImg2} alt='treeplantingImg2'/>
                    </div>
                </div>
                <p class="leading-relaxed pt-5 pb-5">
                Overall, student organization events play a pivotal role in enriching the college experience,
                offering students opportunities for personal growth, professional development, and meaningful
                connections that extend far beyond graduation.
                </p>             
            </div>
            </section>
        </div>
    );
}
 
export default Events;