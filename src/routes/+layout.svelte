<script>
    import "../app.css";
    import Navbar from '$lib/components/Navbar.svelte'
    import Hero from '$lib/components/Hero.svelte'
    import Courses from '$lib/components/Course.svelte'
    import Quiz from "$lib/components/Quiz.svelte"
    import People from "$lib/components/People.svelte"
    import Score from "$lib/components/Score.svelte"
    import Teamskill from "$lib/components/Teamskill.svelte"
    import Freesec from "$lib/components/Freesec.svelte"
    import Footer from "$lib/components/Footer.svelte"
</script>
  
<div class="w-full min-h-screen">
    <Navbar />
    <Hero />
    <Courses />
    <Quiz />
    <People />
    <Score />
    <Teamskill />
    <Freesec />
    <Footer />
	<slot />
</div>
