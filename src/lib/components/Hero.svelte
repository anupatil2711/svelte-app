<script>
    import heros from '$lib/assets/heros.jpg';
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineGoogle from "svelte-icons-pack/ai/AiOutlineGoogle";
    import AiFillApple from "svelte-icons-pack/ai/AiFillApple";
    import BiLogoLinkedinSquare from "svelte-icons-pack/bi/BiLogoLinkedinSquare";
    import BiLogoGithub from "svelte-icons-pack/bi/BiLogoGithub";
    import FaBrandsFacebook from "svelte-icons-pack/fa/FaBrandsFacebook";

</script>

<div class="bg-[#fff0e5] h-[850px] w-full" >
    <section class=" body-font">
        <div class="container mx-auto py-48 md:flex-row flex-col flex">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img class="ml-24 object-cover object-center w-[900px] h-[500px] border-2 border-[#10162f]" alt="/" src={heros} />
            </div>
            <div class='flex flex-col w-full mt-[-45px] '>
            <div class=" md:w-1/2  rounded-lg flex flex-col md:ml-auto w-full  md:mt-0 mr-[100px]">
                <h1 class="text-gray-900 text-[31px] font-medium mb-5 font-sub leading-[50px] w-[800px]">Join the millions learning to code <br/>with Codecademy for free</h1>
                <div class="relative mb-4 flex flex-col ml-1">
                    <label for="full-name" class="leading-10 text-md text-[#10162f]">Email</label>
                    <input type="text" class="w-[96%] h-12 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div class="relative mb-2 ml-1">
                    <label for="password" class="leading-10 text-md text-[#10162f]">Password</label>
                    <input type="email" id="email" name="email" class="w-[96%] h-12 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <button class="text-white ml-1 bg-[#3a10e5] border-0 py-2 px-8 mt-6 focus:outline-none hover:bg-[#10162f] rounded text-lg w-[487px]">Sign up</button>
                <p class=" text-sm text-[#10162f] mt-4 ml-2">By signing up for Codecademy, you agree to Codecademy's<br/> <a class= "underline  text-[#3a10e5]" href='Terms of Service'>Terms of Service</a> & <a class= "underline  text-[#3a10e5]" href='Privacy Policy.'>Privacy Policy.</a></p>
                <p class=" text-sm text-[#10162f] font-bold mt-4 ml-2">Or sign up using:</p>
                <div class='flex  w-[90%] space-x-6 h-[53px] mt-9 ml-2'>
                    <div class='border-2 border-black col-span-1 w-20 bg-white'><p class='p-2 ml-[13px]'><Icon src={AiOutlineGoogle} size={34} /></p></div>
                    <div class='border-2 border-[#10162f] col-span-1 w-20 bg-white'><p class='p-2 ml-[15px]'><Icon src={FaBrandsFacebook} size={30} /></p></div>
                    <div class='border-2 border-[#10162f] col-span-1 w-20 bg-white'><p class='p-2 ml-[13px]'><Icon src={BiLogoLinkedinSquare} size={78} /></p></div>
                    <div class='border-2 border-[#10162f] col-span-1 w-20 bg-white'><p class='p-2 ml-[13px]'><Icon src={BiLogoGithub} size={35} /></p></div>
                    <div class='border-2 border-[#10162f] col-span-1 w-20 bg-white'><p class='p-2 ml-[13px]'><Icon src={AiFillApple} size={35} /></p></div>
                </div>
            </div>
            </div> 
        </div>
    </section>
   </div>