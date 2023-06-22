<script>
  import SvelteTable from "svelte-table";

  import { switchData } from "$lib/switchData.js";
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
    },
    {
      key: "ActuationForce",
      title: "Actuation (g)",
      value: (v) => v.ActuationForce,
      sortable: true,
    },
    {
      key: "BottomOutForce",
      title: "Bottom Out (g)",
      value: (v) => v.BottomOutForce,
      sortable: true,
    },
    {
      key: "StemType",
      title: "Stem Compatibility",
      value: (v) => v.StemType,
    },
  ];
</script>

<div class="table">
  <SvelteTable
    {columns}
    {rows}
    bind:sortBy
    bind:sortOrder
    classNameTable={["table table-striped"]}
    classNameThead={["table-primary"]}
    classNameSelect={["custom-select"]}
    classNameRow={(row, rowIndex) => (rowIndex % 2 == 0 ? null : "row-odd")}
  />
</div>

<style>
  .row-odd{
    background-color: white;
  }
  :global(.table td) {
    border: solid black 2px;
    text-align: center;
    padding: 1rem;
  }
  .table {
    margin: 0 10rem;
    padding-bottom: 5rem;
  }
</style>
