<script>
  import { page } from "$app/stores";
  import Navigation from "./navigation.svelte";
  import FadingImage from "./fadingImage.svelte";
</script>

<footer id="about">
  <div>
    <p>About</p>
    <FadingImage/>
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
