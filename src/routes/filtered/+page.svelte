<script>
    import TableDisplay from "$lib/tableDisplay.svelte";
    import { switchData } from "$lib/switchData";
    import { page } from "$app/stores";

    let filteredRows = switchData.filter((x) =>
        $page.url.hash.replace("#", "") === ""
            ? x
            : x.Brand == $page.url.hash.replace("#", "")
    );
</script>

<TableDisplay rows={filteredRows} />
