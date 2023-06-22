<script>
  import SvelteTable from "svelte-table";

  import { switchData } from "$lib/switchData.js";
  let sortBy = "Brand";
  let sortOrder = 1;
  const rows = switchData;
  const columns = Object.keys(rows[0]).map((key) => {
    return {
      key,
      title: key,
      value: (row) => row[key],
      sortable: true,
    };
  });
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
  />
</div>

<style>
  .table {
    margin: 0 10rem;
  }
</style>
