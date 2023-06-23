<script>
  import { page } from "$app/stores";
</script>
<!--navigate to other pages and/or components-->
<nav>
  <ul>
    <li>
      <a class:active={$page.url.pathname === "/"} href="/">Home</a>
    </li>
    <li>
      <a class:active={$page.url.pathname.includes("table")} href="table">Table</a>
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
    color: var(--text-colour);
    text-align: center;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }

  nav {
    position: fixed;
    width: 100%;
    background-color: var(--secondary-colour);
    top: 0;
  }

</style>
