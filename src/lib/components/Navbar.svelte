<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiFillCaretDown from "svelte-icons-pack/ai/AiFillCaretDown";
    import AiOutlineSearch from "svelte-icons-pack/ai/AiOutlineSearch";
</script>
    <div class='bg-[#fff0e5] flex justify-between h-24 items-center w-full  text-[#10162f] fixed left-0 right-0 top-0'>
      <h1 class='w-4 mb-1 ml-20 text-3xl font-bold text-[#10162f]'>CodeAcademy.</h1>
      <ul class='hidden md:flex text-[20px] mr-[320px] font-normal font-sub ml-64'>
        <li class='p-3 flex hover:text-[#3a10e5]'>Catlog<p class='pt-[6px] pl-2'><Icon src={AiFillCaretDown} size={20} /></p></li>
        <li class='p-3 flex hover:text-[#3a10e5]'>Resources<p class='pt-[6px] pl-2'><Icon src={AiFillCaretDown} size={20} /></p></li>
        <li class='p-3 flex hover:text-[#3a10e5]'>Community<p class='pt-[6px] pl-2'><Icon src={AiFillCaretDown} size={20} /></p></li>
        <li class='p-3 flex hover:text-[#3a10e5]'>Pricing<p class='pt-[6px] pl-2'><Icon src={AiFillCaretDown} size={20} /></p></li>
        <li class='p-3 flex hover:text-[#3a10e5]'>For Teams</li>
      </ul>
      <div class='flex gap-10 mb-4 ml-7 mr-[-22px]'>
        <p class='mt-2'><Icon src={AiOutlineSearch} size={27}/></p>
        <button class=' text-[#10162f] text-lg font-bold px-4 py-2 mr-[150px] rounded-md hover:bg-stone-400 hover:text-[#3a10e5]'>Log In</button>
      </div>
      
    </div>
  