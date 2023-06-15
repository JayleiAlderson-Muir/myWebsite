<script>
  import { page } from "$app/stores";
</script>

<nav>
  <ul>
    <li>
      <a class:active={$page.url.pathname === "/"} href="/">Home</a>
    </li>
    <li>
      <a class:active={$page.url.pathname.includes("page2")} href="page2">Page2</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
  </ul>
</nav>

<style>
  ul {
    display: flex;
    gap: 25px;
    justify-content: center;
  }

  li{
    padding: 0 60px;
  }
  nav {
    position: fixed;
    width: 100%;
    background-color: honeydew;
    top: 0;
  }
</style>
