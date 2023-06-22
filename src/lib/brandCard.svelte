<script>
  //props to be called
  export let brand;
  export let image_urls = [];
  export let brandIndex;
  //init
  let imageIndex = 0;
  var cycleInterval;
  //change the displayed image
  //this is based on information from parent 
  //data is stored in switchData.js
  function cycleImage() {
    if (imageIndex >= image_urls[brandIndex].length - 1) {
      imageIndex = 0;
    } else {
      imageIndex++;
    }
  }
</script>

<!--displays based on props-->
<div>
  <a href="/table#{brand}">
    <img
      on:mouseenter={() => {
        cycleImage(); //cycling img immediately means clarity for user
        cycleInterval = setInterval(cycleImage, 1000); 
      }}
      on:mouseleave={() => {
        clearInterval(cycleInterval); //will stop cycling when not hovering
      }}
      src={image_urls[brandIndex][imageIndex]} 
      alt="{brand} switches"
    />
  </a>
  <p>{brand}</p>
</div>

<style>
  a {
    width: inherit;
  }
  img {
    width: 20rem;
    object-fit: cover;
    border-radius: 10px;
    transition: width 0.375s;
  }
  img:hover {
    box-shadow: 0 0 2px 1px var(--secondary-colour);
    width: 21rem;
  }
  div {
    width: 21rem;
    height: 21rem;
  }
  p {
    text-align: center;
    font-weight: bold;
  }
</style>
