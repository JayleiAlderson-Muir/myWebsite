<script>
  import { tweened } from "svelte/motion";
  
  let imagePositionX = tweened(0, {
    duration: 2500
  })
  let imagePositionY = tweened(0, {
    duration: 2500
  })
  //let imagePosition = 0;
  const BASE_URL = "https://api.unsplash.com/search/photos";
  const AUTHORIZATION = "client_id=Ca5OEr6brF6hFhF--FoVw0f_UnIGPP1CtPdnrjmp9Mo";
  let keyboardData;
  let keyboardImage;
  let rawData;
  let index = 0;
  fetch(`${BASE_URL}?page=1&query=mechanical-keyboard&${AUTHORIZATION}`)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.results[0].urls.raw);
      rawData = data;
      setInterval(changeImage, 5000);
    });

  function changeImage() {
    
    if (index >= rawData.results.length - 1) {
      index = 0;
    }
    keyboardData = rawData.results[index++];
    keyboardImage = keyboardData.urls.raw;
    if ($imagePositionX == 0){
        imagePositionX.set(10);
        imagePositionY.set(100);
    } else {
        imagePositionX.set(0);
        imagePositionY.set(0);
    }
    
    
  }
  console.log(keyboardImage);
</script>

<section>
  {#if keyboardImage}
    <img src={keyboardImage} alt="keyboard" style="--image-pos-x: {-1 * $imagePositionX}px;--image-pos-y: {-1 * $imagePositionY}px"/>
  {/if}
</section>

<style>
  img {
    object-fit: cover;
    object-position: var(--image-pos-x) var(--image-pos-y);
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
  section {
    width: 100vw;
    height: 50vh;
  }
</style>
