<script>
  import { page } from "$app/stores";
</script>

<nav>
  <ul>
    <li>
      <a class:active={$page.url.pathname === "/"} href="/">Home</a>
    </li>
    <li>
      <a class:active={$page.url.pathname.includes("page2")} href="table">Table</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
  </ul>
</nav>

<style>
  ul {
    display: flex;
    gap: 10vw;
    justify-content: space-evenly;
    padding: 0 20vw;
  }
  a {
    text-decoration: none;
    color: white;
    text-align: center;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }

  nav {
    position: fixed;
    width: 100%;
    background-color: #4d7c8a;
    top: 0;
  }

</style>
