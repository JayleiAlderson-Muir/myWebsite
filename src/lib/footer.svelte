<script>
  import { page } from "$app/stores";
  import Navigation from "./navigation.svelte";
  const BASE_URL = "https://api.unsplash.com/search/photos";
  const AUTHORIZATION = "client_id=Ca5OEr6brF6hFhF--FoVw0f_UnIGPP1CtPdnrjmp9Mo";
  let keyboardData;
  fetch(`${BASE_URL}?page=1&query=mechanical-keyboard&${AUTHORIZATION}`)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.results[0].urls.raw);
      keyboardData = data.results;
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
