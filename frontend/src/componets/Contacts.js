const Contacts = () => {
    return ( 
        <div class="w-full bg-gradient-to-r from-orange-100 to-blue-100 pt-10 pb-10">
                <p class="text-center">
                    Do you have any inquiry or in need of more clarification concerning our organization, worry not,just react out to us today!
                </p>
            <div class="w-10/12 md:w-96 m-auto">
                <h2 class="text-center font-semibold text-lg text-orange-500">Get In Touch!</h2>
                <form action="" class="pt-5">
                    <label>First Name</label><br/>
                    <input type="text" placeholder="eg. John" required class="w-64 p-1 rounded-md bg-white shadow-sm shadow-blue-300" /><br/>
                    <label>Last Name</label><br/>
                    <input type="text" placeholder="eg. Kamau" required class="w-64 p-1 rounded-md bg-white shadow-sm shadow-blue-300" /><br/>
                    <label>Email</label><br/>
                    <input type="email" placeholder="johnkamau@gmail.com" required class="w-64 p-1 rounded-md bg-white" /><br/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Hello NUSA..." class="mt-4 w-full p-2 rounded-md shadow-sm shadow-blue-300"></textarea><br/>
                    <button class="w-52 m-auto bg-orange-500 p-2 rounded-md justify-center mt-4 text-white font-semibold shadow-sm shadow-blue-300 hover:bg-blue-600">Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default Contacts;