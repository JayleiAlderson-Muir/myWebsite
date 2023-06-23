<script>
    import SvelteTable from "svelte-table";
    import { switchData } from "$lib/switchData.js";
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { columns } from "$lib/switchData.js";
    
    export let rows;
  
    let sortBy = "Brand";
    let sortOrder = 1;
    //declare table data and structure
  
    
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
      classNameRow={(row, rowIndex) => (rowIndex % 2 == 0 ? "row-even" : "row-odd")}
    />
  </div>
  
  <style>
    :global(.row-odd) {
      background-color: white;
    }
    :global(.row-even) {
      background-color: lightgray;
    }
    :global(.table td) {
      border: solid black 2px;
      text-align: center;
      padding: 0.5rem;
    }
    :global(table) {
      border-collapse: collapse;
    }
    .table{
      margin: 0 10%;
      padding-bottom: 5rem;
    }
  </style>