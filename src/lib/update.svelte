<script>
  import { switchData } from "$lib/switchData.js";
  import { page } from "$app/stores";
  let rows;
  export function updateTable() {
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
</script>
