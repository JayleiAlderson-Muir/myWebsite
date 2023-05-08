<script>
  import { get } from "../../routes/api/scrape.js";
  import { onMount } from "svelte";

  let html = '';

  onMount(async () => {
    const response = await get();
    html = response.body;
  });
</script>

{@html html}
