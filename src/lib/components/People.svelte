<script>
    import person1 from '$lib/assets/person1.avif';
    import person2 from '$lib/assets/person2.avif';
    import person3 from '$lib/assets/person3.avif';
    import person4 from '$lib/assets/person4.avif';
</script>

<div class='text-[#10162f] bg-[#fff0e5] h-[840px] sm:text-lg md:text-xl'>
    <div>
        <p class='ml-28 pt-16 text-[50px] font-medium font-sub'>Stories from real people</p>
        <p class='ml-28 pt-5 text-[22px] font-normal mt-3'>Watch and read stories from the Codecademy community.</p>
    </div>
    <div class='flex ml-28 mt-14 space-x-5'>
        <div class='flex flex-row'>
            <div class='border border-black w-[360px] h-[359px]'>
                <div class='hover:text-[#3a10e5]'>
                <img class='object-cover object-center w-[360px] h-[359px]' alt='/' src={person1} />
                <p class='mt-3 font-semibold text-[27px] leading-9'>Technical Analyst to Front-<br/>End Engineer in 6 Months</p> 
                <p class='mt-3 leading-tight font-cor text-[17px]'>Cristian T., Front-End <br/>Engineer @ Grid Dynamics, Guadalajara</p>
                </div>
            </div>
        </div>
        <div class='flex flex-row'>
            <div class='border border-black w-[360px] h-[359px]'>
                <div class='hover:text-[#3a10e5]'>
                <img class='object-cover object-center w-[360px] h-[359px]' alt='/' src={person2}/>
                <p class='mt-3 font-semibold text-[27px] leading-9 hover:text-[#3a10e5]'>Freelancer to Developing Apps for NASA</p> 
                <p class='mt-3 leading-tight font-cor text-[17px] hover:text-[#3a10e5]'>De'Shaun B., Associate <br/>Software Engineer, Winter Park</p>
                </div>
            </div>
        </div>
        <div class='flex flex-row'>
            <div class='border border-black w-[360px] h-[359px]'>
                <div class='hover:text-[#3a10e5]'>
                <img class='object-cover object-center w-[360px] h-[359px]' alt='/' src={person3}/>
                <p class='mt-3 font-semibold text-[27px] leading-9 hover:text-[#3a10e5]'>Lessons from a Product Owner turned Engineer</p> 
                <p class='mt-3 leading-tight font-cor text-[17px] hover:text-[#3a10e5]'>Serena I., Software Developer <br/>@ Adidas, South Holland</p>
                </div>
            </div>
        </div>
        <div class='flex flex-row'>
            <div class='border border-black w-[360px] h-[359px]'>
                <img class='object-cover object-center w-[360px] h-[359px]' alt='/' src={person4}/>
                <div class='hover:text-[#3a10e5]'>
                <p class='mt-3 font-semibold text-[27px] leading-9'>From Film to Full-Stack Engineer in 11 Months</p> 
                <p class='mt-3 leading-tight font-cor text-[17px]'>Bob J., Ruby on Rails <br/>Developer, São Paulo</p>
                </div>
            </div>
        </div>
    </div>
</div>