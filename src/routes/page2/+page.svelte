<script>
  /*import { get } from "../../routes/api/scrape.js";
  import { onMount } from "svelte";

  let html = '';

  onMount(async () => {
    const response = await get();
    html = response.body;
  });*/
  import SvelteTable from "svelte-table";

  import {switchData} from "$lib/switchData.js";
  let keys = Object.keys(switchData[0]);
  console.log(keys);
  let sortBy = "Brand";
  let sortOrder = 1;
  const rows = switchData;
  const columns = [
    {key: "Brand", title: "Brand", value: v => v.Brand, sortable: true,},
    {key: "Name", title: "Name", value: v => v.Name, sortable: true,},
    {key: "Type", title: "Type", value: v => v.Type, sortable: true,},
    {key: "ActuationForce", title: "Actuation Force", value: v => v.ActuationForce, sortable: true,},
    {key: "ActuationDistance", title: "Actuation Distance", value: v => v.ActuationDistance, sortable: true,},
    {key: "BottomOutForce", title: "Bottom Out Force", value: v => v.BottomOutForce, sortable: true,},
    {key: "TravelDistance", title: "Bottom Out Travel", value: v => v.TravelDistance, sortable: true,},
    {key: "StemType", title: "Stem Compatibility", value: v => v.StemType, sortable: true,},
    {key: "PrebuiltAvailability", title: "Available in prebuilt", value: v => v.PrebuiltAvailability, sortable: true,}
  ]
  function sortList(key) {
    switchData.sort((a,b) => {
      if (typeof a[key] == "string" && typeof b[key] == "string")
        if (a[key].toLowerCase() > b[key].toLowerCase())
          return -1;
        else return 1;
      else 
        if (a[key] > b[key])
          return -1;
        else return 1;
    })
  }
  sortList("ActuationForce")
  console.log(switchData)
</script>

  <div>
    <SvelteTable
      columns={columns}
      rows={rows}
      bind:sortBy
      bind:sortOrder
      classNameTable={['table table-striped']}
      classNameThead={['table-primary']}
      classNameSelect={['custom-select']}/>
</div>


<style>
  
</style>