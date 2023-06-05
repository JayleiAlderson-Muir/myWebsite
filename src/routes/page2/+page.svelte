<script>
  /*import { get } from "../../routes/api/scrape.js";
  import { onMount } from "svelte";

  let html = '';

  onMount(async () => {
    const response = await get();
    html = response.body;
  });*/
  import {switchData} from "$lib/switchData.js"
</script>
<body>
  <nav>
    <ul>
        <li>{switchData[0]["Switch Name"]}</li>
        <li>{switchData[0]["Actuation Force"]}</li>
        <li><img src = {switchData[0].Image} alt = {switchData[0].Brand}/></li>
    </ul>
</nav>
</body>

