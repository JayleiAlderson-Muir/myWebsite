<!-- CSS Styling -->
<style>
    h1
    {
        color:blue;
        font-size:14px;
        font-style:italic;
        font-weight:normal;
    }
    button
    {
        color:black;
        font-size:14px;
        font-style:italic;
        font-weight:normal;    
        background-color:white;  
    }
</style>
<!-- JS  -->
<script>
    const num = 21;
    let first_name = "Jay";

    let count = 0;

    function incrementCount()
    {
        count++;
    }

    function reset() 
    {
        count = 0;
    }
</script>

<button on:click={incrementCount}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<button on:click={reset}>
    reset
</button>

<h1>Welcome to SvelteKit {first_name}</h1>

<p> Hello </p>