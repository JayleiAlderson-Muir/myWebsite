<!-- JS  -->
<script>
  const num = 21;
  let first_name = "Jay";

  let count = 0;

  function incrementCount() {
    count++;
  }

  function reset() {
    count = 0;
  }
</script>

<!-- CSS Styling -->

<head />
<!-- HTML -->

<body>
  <div class="centre">
    <button on:click={incrementCount}>
      Clicked {count}
      {count === 1 ? "time" : "times"}
    </button>

    <button on:click={reset}> reset </button>

    <h1>Welcome, {first_name}</h1>
    <p class="red">what</p>
  </div>
</body>
