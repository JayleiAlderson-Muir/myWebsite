<script>
  import { page } from "$app/stores";
  import Navigation from "./navigation.svelte";
  let url = "https://reqres.in";
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
</script>

<footer id="about">
  <div>
    <p>About</p>
  </div>
</footer>

<style>
  footer {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 75%;
  }
</style>
