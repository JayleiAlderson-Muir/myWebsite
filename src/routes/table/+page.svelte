<script>
  import SvelteTable from "svelte-table";

  import { switchData } from "$lib/switchData.js";
  let keys = Object.keys(switchData[0]);
  let sortBy = "Brand";
  let sortOrder = 1;
  const rows = switchData;
  const columns = [
    {
      key: "Brand",
      title: "Brand",
      value: (v) => v.Brand,
      sortable: true,
    },
    {
      key: "Name",
      title: "Switch Name",
      value: (v) => v.Name,
      sortable: true,
    },
    {
      key: "Type",
      title: "Type",
      value: (v) => v.Type,
      sortable: true,
    },
    {
      key: "ActuationForce",
      title: "Actuation Force (g)",
      value: (v) => v.ActuationForce,
      sortable: true,
    },
    {
      key: "BottomOutForce",
      title: "Bottom Out Force (g)",
      value: (v) => v.BottomOutForce,
      sortable: true,
    },
    {
      key: "StemType",
      title: "Stem Compatibility",
      value: (v) => v.StemType,
      sortable: true,
    },
  ];
</script>

<div class="row">
  <SvelteTable
    {columns}
    {rows}
    bind:sortBy
    bind:sortOrder
    classNameTable={["table table-striped"]}
    classNameThead={["table-primary"]}
    classNameSelect={["custom-select"]}
  />
</div>

<style>
  .row {
    margin: 0 10rem;
  }
</style>
