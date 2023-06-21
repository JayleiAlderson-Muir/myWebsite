<script>
    export let brand;
    export let image_urls=[];


</script>
<div>

<img src="{image_urls[0]}"/>
<p>{brand}</p>
</div>
<style>
    img {
    max-width: inherit;
    object-fit: cover;
  }
  div {
    max-width: 20rem;
  }
  p {
    text-align: center;
  }
</style>