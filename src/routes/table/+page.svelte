<script>
  import SvelteTable from "svelte-table";
  import { switchData } from "$lib/switchData.js";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  let rows;
  if ($page.url.hash) {
    updateTable();
  } else {
    rows = switchData;
  }

  function updateTable() {
    if ($page.url.hash !== "#about") {
      rows = switchData.filter((x) =>
        $page.url.hash.replace("#", "") === ""
          ? x
          : x.Brand == $page.url.hash.replace("#", "")
      );
    } else {
      rows = switchData;
    }
  }
  onMount(async () => {
    onhashchange = updateTable;
  });

  let sortBy = "Brand";
  let sortOrder = 1;
  //declare table data and structure

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

<!--create svelte table based on props, attributes-->
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
  :global(.row-odd) {
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
