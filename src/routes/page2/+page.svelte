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
        <li>{switchData[1]["Switch Name"]}</li>
        <li>{switchData[1]["Actuation Force"]}</li>
        <li><img src = {switchData[1].Image} alt = {switchData[1].Brand}/></li>
    </ul>
</div>


