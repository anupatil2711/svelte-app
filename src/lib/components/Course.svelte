<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import BsBarChart from "svelte-icons-pack/bs/BsBarChart";
    import BsChevronLeft from "svelte-icons-pack/bs/BsChevronLeft";
    import BsChevronRight from "svelte-icons-pack/bs/BsChevronRight";
    import SiCodecademy from "svelte-icons-pack/si/SiCodecademy";
    
</script>

<div class='bg-[#10162f] h-[1524px] text-[#10162f] max-w-[100%]'>
  <div class='text-xl text-white pt-16 leading-10 align-middle flex flex-col text-center'>
    <h1 class='font-cor text-[24px]'>Start Learning</h1>
    <h1 class='font-bold text-[50px]'>Popular Courses</h1>
  </div>

  <div class="flex mx-auto flex-wrap mt-16 justify-center">
    <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-4 title-font font-bold  inline-flex items-center leading-none border-yellow-500  text-white tracking-wider" href='ji'>
      Free
    </a>
    <a class="text-white sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-bold inline-flex items-center leading-none border-gray-200 hover:text-white hover:border-b-4 hover:border-yellow-500 tracking-wider" href='ji'>
      New to coding
    </a>
    <a class="text-white sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-bold inline-flex items-center leading-none border-gray-200 hover:text-white hover:border-b-4 hover:border-yellow-500 tracking-wider" href='ji'>
      Most popular
    </a>
    <a class="text-white sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-bold inline-flex items-center leading-none border-gray-200 hover:text-white hover:border-b-4 hover:border-yellow-500 tracking-wider" href='ji'>
      Skill paths
    </a>
    <a class="text-white sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-white hover:border-b-4 hover:border-yellow-500 tracking-wider" href='ji'>
      Career paths
    </a>
  </div>

  <div class='flex border-black h-[379px] mt-14 justify-center space-x-5 text-[#10162f]'>
    <div class='rounded-md border-2 border-black col-span-1 w-[331px] bg-white transition duration-100 transform hover:translate-x-2 hover:-translate-y-2'>
      <div class='rounded-t h-[41px] bg-[#e5f1cb]'>
        <p class='p-2 ml-3 font-medium font-cor text-[20px]'>Free course</p>
      </div>
      <p class='text-[25px] p-2 ml-3 mt-7 font-medium font-sub leading-4'>Intro to ChatGPT</p>
      <p class='p-2 ml-3 font-body font-bold'>Learn about ChatGPT, one of the most <br/>advanced AI systems available today, and dive into the world of Generative AI.</p>
      <p class='m-2 mt-28 border-dashed border-black border-[1.4px]'></p>
      <p class='ml-4 flex'><Icon src={BsBarChart} size={20} /><b class="pl-2 pr-1">Beginner</b> Friendly <b class="pl-[63px] pr-1">7</b>Lessons</p>
    </div>
    <div class='rounded-md border-2 border-[#10162f] col-span-1 w-[331px] bg-white transition duration-100 transform hover:translate-x-2 hover:-translate-y-2'>
    <div class='rounded-t h-[41px] bg-[#e5f1cb]'>
        <p class='p-2 ml-3 font-medium font-cor text-[20px]'>Free course</p>
      </div>
      <p class='text-2xl p-2 ml-3 font-bold mt-7 leading-4'>Learn HTML</p>
      <p class='p-2 ml-3 font-body font-bold'>Start at the beginning by learning HTML <br/>basics — an important foundation for <br/>building and editing web pages.</p>
      <p class='m-2 mt-36 border-dashed border-black border-[1.4px]'></p>
      <p class='ml-4 flex'><Icon src={BsBarChart} size={20} /><b class="pl-2 pr-1">Beginner</b> Friendly <b class="pl-[63px] pr-1">6</b>Lessons</p>
    </div>
    <div class='rounded-md border-2 border-[#10162f] col-span-1 w-[331px] bg-white transition duration-100 transform hover:translate-x-2 hover:-translate-y-2'>
    <div class='rounded-t  h-[41px] bg-[#e5f1cb]'>
        <p class='p-2 ml-3 font-medium font-cor text-[20px]'>Free course</p>
      </div>
      <p class='text-2xl p-2 ml-3 mt-7 font-bold leading-4'>Learn JavaScript</p>
      <p class='p-2 ml-3 font-body font-bold'>Learn how to use JavaScript — a <br/>powerful and flexible programming <br/>language for adding website interactivity.</p>
      <p class='m-2 mt-[120px] border-dashed border-black border-[1.4px]'></p>
      <p class='ml-4 flex'><Icon src={BsBarChart} size={20} /><b class="pl-2 pr-1">Beginner</b> Friendly <b class="pl-[63px] pr-1">11</b>Lessons</p>
    </div>
    <div class='rounded-md border-2 border-[#10162f] col-span-1 w-[331px] bg-white transition duration-100 transform hover:translate-x-2 hover:-translate-y-2'>
    <div class='rounded-t h-[41px] bg-[#e5f1cb]'>
        <p class='p-2 ml-3 font-medium font-cor text-[20px]'>Free course</p>
      </div>
      <p class='text-2xl p-2 ml-3 mt-7 font-bold leading-4'>Learn SQL</p>
      <p class='p-2 ml-3 font-body font-bold'>In this SQL course, you'll learn how to <br/>manage large datasets and analyze real <br/>data using the standard data management language.</p>
      <p class='m-2 mt-[120px] border-dashed border-black border-[1.4px]'></p>
      <p class='ml-4 flex'><Icon src={BsBarChart} size={20} /><b class="pl-2 pr-1">Beginner</b> Friendly <b class="pl-[63px] pr-1">4</b>Lessons</p>
    </div>
  </div>
  
  <div class='mt-12 flex flex-col items-center'><button class='bg-yellow-400 font-semibold text-lg p-3 px-5 rounded-md font-sub'>Explore Full Catlog</button></div>
      <div class='flex'>  
        <div class='ml-24 grid grid-rows-4 mt-24 border-[1.6px] border-[#424242] h-[540px] w-[860px]'>
          <div class='border-b-2 border-[#424242] h-[62px] bg-[#040314]'></div>
          <div class='border-b-2 border-[#424242] h-[68px] mt-[-73px] grid grid-cols-2 bg-[#040314]'>
            <div class='border-r-2 border-[#424242] flex items-center'>
              <p class='text-white pt-1 text-xl flex items-center p-2'><b class="pr-5 pl-5"><Icon src={BsChevronLeft} size={20}/></b>Code</p>
            </div>
            <div class=' border-[#424242] flex items-center'>
              <p class='ml-[305px] text-white text-xl flex items-center'>Output <b class="pl-5"><Icon src={BsChevronRight} size={20} /></b></p>
            </div>
          </div>
          <div class='border-l-r-2 border-[#424242] h-[350px] mt-[-140px] grid grid-cols-2'>
            <div class='border-r-2 border-[#424242]'>
                <!-- <Editor
                    height = '37.1vh'
                    width= '45.3vh'
                    theme = 'vs-dark'
                    defaultLanguage="javascript" 
                    defaultValue="// some comment"
                 /> -->
            </div>
            <div class='border-[#424242] bg-[#0a0d1c]'></div>
          </div>
          <div class='border-t-2 border-[#424242] h-[60px] mt-[75px] bg-[#040314]'>
            <button class='ml-[777px] w-20 px-4 pt-3 py-[18px] text-lg font-bold text-center bg-[#ffd300] rounded-md'>Run</button>
          </div>
        </div>
        <div class='mt-44  ml-[125px] h-[400px] w-[560px]'>
          <p class='text-white text-lg font-medium p-2 ml-3 tracking-wide font-cor'>Beginners welcome</p>
          <p class='text-white font-bold text-5xl p-2 ml-3 leading-[57px] line font-sub'>Start coding in <br/>seconds</p>
          <p class='text-white p-2 ml-3 text-lg font-medium font-body'>Go ahead, give it a try. Our hands-on learning <br/>environment means you'll be writing real code from your <br/>very first lesson.</p>
          <button class='mt-6 text-lg font-extrabold px-7 py-2 pb-3 ml-5 text-[#ffd300] border-[3px] border-[#ffd300] rounded-md text-center hover:bg-gray-950 font-body'>Continue lesson</button>
          <button class='text-lg  ml-4 text-[#ffd300] hover:bg-gray-950 px-5 py-2 pb-3 rounded-md font-body'>More beginners courses</button>
        </div>
      </div>
  
</div>