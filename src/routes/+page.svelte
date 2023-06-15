<!-- JS  -->
<script>
  import {writable} from "svelte/store";
  import {switchData} from "$lib/switchData.js";

  const switchDataStore = writable(switchData);
</script>

<!-- HTML -->

  <div class="centre">
    <ul>
    {#each $switchDataStore as switche}
      <li>
        <p>Switch Name: {switche["Switch Name Complete"]}</p>
        <p>Type: {switche.Type}</p>
        <p>Actuation: {switche["Actuation Force"]}</p>
      </li>
    {/each}
    </ul>
  </div>

<style>
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 25px
  }
  @media (max-width: 700px) {
    ul {
    
    grid-template-columns: 1fr ;
    
  }
}
</style>