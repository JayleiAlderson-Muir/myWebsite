<script>
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