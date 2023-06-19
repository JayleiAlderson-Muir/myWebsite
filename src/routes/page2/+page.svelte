<script>
  /*import { get } from "../../routes/api/scrape.js";
  import { onMount } from "svelte";

  let html = '';

  onMount(async () => {
    const response = await get();
    html = response.body;
  });*/
  import {switchData} from "$lib/switchData.js";
  let keys = Object.keys(switchData[0]);
  console.log(keys);
</script>

  <div>
    <ul>
      <li>{switchData[0].Name}</li>
      <li>{switchData[0].ActuationForce}</li>
      <li><img src = {switchData[0].Image} alt = {switchData[0].Brand}/></li>
    </ul>
</div>


