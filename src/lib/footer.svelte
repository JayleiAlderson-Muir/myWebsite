<script>
  import { page } from "$app/stores";
  import Navigation from "./navigation.svelte";
  import FadingImage from "./fadingImage.svelte";
</script>
<!--TODO-->
<footer id="about">
  <div>
    <h3>Switching it Up: Your Guide to Mechanical Keyboard Switches</h3>
    <h4>All the latest data you need. Now in one place.</h4>
    <FadingImage/>
  </div>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0;
    background-color: var(--secondary-colour);
  }
  h3 {
    color: var(--text-colour);
  }
  h4 {
    color: var(--text-colour);
  }
</style>
