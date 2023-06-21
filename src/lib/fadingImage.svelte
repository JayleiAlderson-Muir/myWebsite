<script>
  import { tweened } from "svelte/motion";
  
  let sectionHeight = 0;
  let sectionWidth = 0;

  let imageHeight = 0;
  let imageWidth = 0;

  let imagePositionX = tweened(500, {
    duration: 2500
  })
  let imagePositionY = tweened(500, {
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
    if ($imagePositionX == 500){
        imagePositionX.set(imageWidth - sectionWidth);
        imagePositionY.set(imageHeight - sectionHeight);
    } else {
        imagePositionX.set(500);
        imagePositionY.set(500);
    }
    
    
  }
  function imageLoaded(element){
    imageWidth = element.target.naturalWidth;
    imageHeight = element.target.naturalHeight;
    console.log(`image w: ${imageWidth}\n section w: ${sectionWidth}`)
  }
</script>

<section bind:clientHeight={sectionHeight} bind:clientWidth={sectionWidth}>
  {#if keyboardImage}
    <img on:load={imageLoaded} src={keyboardImage} alt="keyboard" style="--image-pos-x: {-1 * $imagePositionX}px;--image-pos-y: {-1 * $imagePositionY}px"/>
  {/if}
</section>

<style>
  img {
    object-fit: none;
    object-position: var(--image-pos-x) var(--image-pos-y);
    overflow: visible;
    height: 100%;
    width: 100%;
  }
  section {
    width: 100vw;
    height: 50vh;
  }
</style>
