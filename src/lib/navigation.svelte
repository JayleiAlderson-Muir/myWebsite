<script>
  import { page } from "$app/stores";
</script>

<nav>
  <ul>
    <li>
      <button class:active={$page.url.pathname === "/"}
        ><a href="/">Home</a></button
      >
    </li>
    <li>
      <button class:active={$page.url.pathname.includes("page2")}
        ><a href="page2">Page2</a></button
      >
    </li>
  </ul>
</nav>

<style>
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 25px;
  }
</style>
