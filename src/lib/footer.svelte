<script>
  import { page } from "$app/stores";
  import Navigation from "./navigation.svelte";
  import FadingImage from "./fadingImage.svelte";
</script>

<footer id="about">
  <div>
    <h3>About</h3>
    <FadingImage/>
  </div>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0;
    background-color: #4d7c8a;
  }
  h3 {
    color: white;
  }
</style>
