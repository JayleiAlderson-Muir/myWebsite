<!-- JS  -->
<script>
  import { writable } from "svelte/store";
  import { switchData, brandImages } from "$lib/switchData.js";
  import BrandCard from "$lib/brandCard.svelte";

  const switchDataStore = writable(switchData);

  let brandList = ["Cherry", "Gateron", "Kailh", "ZealPC", "TTC", "Outemu"];
</script>

<!-- HTML -->
<!--iterate through brand array and parse necessary info to component to handle creation-->
<div class="centre">
  <ul>
    {#each brandList as brand, brandIndex}
      <li>
        <div class="brand-image">
          <BrandCard brand={brand} image_urls={brandImages} brandIndex={brandIndex}/>
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0;
    padding-bottom: 5rem;
    justify-items: center;
    row-gap: 5rem;
  }
  @media (max-width: 100rem) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 70rem) {
    ul {
      grid-template-columns: 1fr;
    }
  }
  .centre {
    margin: 0 auto;
    width: 75%;
  }
</style>
