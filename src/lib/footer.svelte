<script>
  import { page } from "$app/stores";
  import Navigation from "./navigation.svelte";
  const BASE_URL = "https://api.unsplash.com/";
  const AUTHORIZATION = "?client_id=Ca5OEr6brF6hFhF--FoVw0f_UnIGPP1CtPdnrjmp9Mo";
  fetch(url)
    .then((response) => response.json())
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
