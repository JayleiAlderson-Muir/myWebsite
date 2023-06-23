<script>
    import "../style.css";
    import Header from "$lib/header.svelte";
    import Footer from "$lib/footer.svelte";
</script>
<title>Switching it Up</title>
<!--basic page layout structure-->
<Header/>

<main>
    <slot/>
</main>

<Footer/>

<style>
    main{
        margin-top: 5rem;
    }

</style>