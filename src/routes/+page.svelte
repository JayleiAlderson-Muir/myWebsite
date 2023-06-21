<!-- JS  -->
<script>
  import { writable } from "svelte/store";
  import { switchData } from "$lib/switchData.js";

  const switchDataStore = writable(switchData);
</script>

<!-- HTML -->

<div class="centre">
  <ul>
    {#each $switchDataStore as switche}
      <li>
        <p>Switch Name: {switche.CompleteName}</p>
        <p>Type: {switche.Type}</p>
        <p>Actuation: {switche.ActuationForce}</p>
        <img src={switche.Image} alt="mechanical keyboard switch" />
      </li>
    {/each}
  </ul>
</div>

<style>
  img {
    max-width: 20rem;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;
  }
  @media (max-width: 1200px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 800px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
</style>
