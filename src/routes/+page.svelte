<!-- JS  -->
<script>
  import { writable } from "svelte/store";
  import { switchData, brandImages } from "$lib/switchData.js";
  import BrandCard from "$lib/brandCard.svelte";

  const switchDataStore = writable(switchData);

  let brandList = [
    "Cherry",
    "Gateron",
    "Kailh",
    "ZealPC",
    "TTC",
    "Outemu"
  ];
</script>

<!-- HTML -->

<div class="centre">
  <ul>
    {#each brandList as brand, index}
      <li>
        <BrandCard {brand} image_urls={brandImages[index]} />
      </li>
    {/each}
  </ul>
</div>

<style>
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0;
  }
  @media (max-width: 80rem) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 60rem) {
    ul {
      grid-template-columns: 1fr;
    }
  }
  .centre {
    margin: 0 auto;
    width: 90%;
  }
</style>
