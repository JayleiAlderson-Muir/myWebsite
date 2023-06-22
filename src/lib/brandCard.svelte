<script>
  export let brand;
  export let image_urls = [];
</script>

<div>
  <a href="/table#{brand}">
    <img src={image_urls[0]} />
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
  }
</style>
