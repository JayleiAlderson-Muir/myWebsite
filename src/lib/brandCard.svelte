<script>
  export let brand;
  export let image_urls = [];
  export let brandIndex;
  let imageIndex = 0;
  var cycleInterval;
  function cycleImage() {
    if (imageIndex >= image_urls[brandIndex].length - 1) {
      imageIndex = 0;
    } else {
      imageIndex++;
    }
  }
</script>

<div>
  <a href="/table#{brand}">
    <img
      on:mouseenter={() => {
        cycleInterval = setInterval(cycleImage, 1000);
      }}
      on:mouseleave={() => {
        clearInterval(cycleInterval);
      }}
      src={image_urls[brandIndex][imageIndex]}
      alt="brand switches"
    />
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
