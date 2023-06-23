<script>
  import TableDisplay from "$lib/tableDisplay.svelte";
  import { switchData } from "$lib/switchData";
  import { page } from "$app/stores";

  let filteredRows;
  //filter table row data by hash value in url
  if ($page.url.hash !== "#about") {
    filteredRows = switchData.filter((x) =>
      $page.url.hash.replace("#", "") === ""
        ? x
        : x.Brand == $page.url.hash.replace("#", "")
    );
  } else {
    window.location.href = "/table#about"; //changes page as table would no longer be filtered
  }
</script>

<TableDisplay rows={filteredRows} />
