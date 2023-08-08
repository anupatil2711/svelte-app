<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineTwitter from "svelte-icons-pack/ai/AiOutlineTwitter";
    import AiFillYoutube from "svelte-icons-pack/ai/AiFillYoutube";
    import CgFacebook from "svelte-icons-pack/cg/CgFacebook";
    import TiSocialInstagram from "svelte-icons-pack/ti/TiSocialInstagram";

</script>

<div class='bg-[#fff0e5] h-[836px] font-body'>
    <div class='pt-9 grid grid-cols-6 grid-rows-1 ml-28'>
      <div class='h-[640px] p-2 leading-8 text-[19px]'>
        <p class='font-extrabold text-[21px]'>Company</p>
        <p class='mt-5'>About</p>
        <p>Careers</p>
        <p>Affiliates</p>
        <div class='flex mt-7 space-x-1'>
          <Icon src={AiOutlineTwitter} size={24}/>
          <Icon src={CgFacebook} size={25}/>
          <Icon src={TiSocialInstagram} size={25}/>
          <Icon src={AiFillYoutube} size={25}/>
        </div>
      </div>
      <div class='p-2 leading-8 text-[19px]'>
        <p class='font-semibold text-[21px]'>Resources</p>
        <p class='mt-4'>Articles</p>
        <p>Blogs</p>
        <p>Cheatsheets</p>
        <p class='font-semibold mt-48 text-[21px]'>Support</p>
        <p class='mt-4'>Help Center</p>
      </div>
      <div class='p-2 leading-8 text-[19px]'>
        <p class='font-semibold text-[21px]'>Plans</p>
        <p class='mt-4'>Paid memberships</p>
        <p>For students</p>
        <p class='font-semibold mt-12'>Community</p>
        <p class='mt-4'>Forums</p>
        <p>Chapters</p>
        <p>Events</p>
      </div>
      <div class='border-l-2 border-[#10162f] p-2 leading-8 text-[19px]'>
        <div class='pl-24'>
          <p class='font-semibold text-[21px]'>Subjects</p>
          <p class='mt-4'>AI</p>
          <p>Cloud Computing</p>
          <p>Code Foundations</p>
        </div>
      </div>
      <div class='p-2 leading-8 text-[19px] ml-16'>
        <p class='font-semibold text-[21px]'>Languages</p>
        <p class='mt-4'>Bash</p>
        <p>C</p>
        <p>C++</p>
        <p>HTML & CSS</p>
      </div>
      <div class='p-2 leading-8 text-[19px]'>
        <p class='font-semibold text-[21px]'>Career building</p>
        <p class='mt-4'>Career paths</p>
        <p>Career services</p>
      </div>
   </div>
   <div class='flex border-t-2 border-[#10162f] ml-28 mt-9 mr-28'>
    <div class='mt-2 flex space-x-8 p-2'>
      <p>Private Policy</p>
      <p>Cookie Policy</p>
      <p>Terms</p>
    </div>
      <p class='mt-4 ml-[840px]'>Made with ❤️ in NYC © 2023 Codecademy</p>
   </div>
  </div>