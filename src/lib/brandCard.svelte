<script>
  export let brand;
  export let image_urls = [];
  let index = 0;
  let hoverFlag = false;
  function cycleImage(brandName) {
    if (hoverFlag) {

    }
  }

</script>

<div>
  <a href="/table#{brand}">
    <img class:hoverFlag on:mouseenter={()=>{console.log(`enter${brand}`)}} src={image_urls[index]} alt="brand switches"/>
  </a>
  <p>{brand}</p>
</div>

<style>
  a {
    max-width: inherit;
  }
  img {
    max-width: 20rem;
    object-fit: cover;
    border-radius: 10px;
  }
  img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    max-width: 21rem;
  }
  div {
    max-width: 21rem;
    max-height: 21rem;
  }
  p {
    text-align: center;
    font-weight: bold;
  }
</style>
