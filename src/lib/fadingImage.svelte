<script>
  import { tweened } from "svelte/motion";

  let imagePositionX;
  let imagePositionY;
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
      setInterval(changeImage, 5100);
    });

  function changeImage() {
    if (!imagePositionX) {
      imagePositionX = tweened(20, {
        duration: 5000,
      });
      imagePositionY = tweened(20, {
        duration: 5000,
      });
    }
    if ($imagePositionY == 20) {
      if (index >= rawData.results.length - 1) {
        index = 0;
      }
      keyboardData = rawData.results[index++];
      keyboardImage = keyboardData.urls.raw;
      imagePositionX.set(80);
      imagePositionY.set(80);
    } else {
      imagePositionX.set(20);
      imagePositionY.set(20);
    }
  }
</script>

<section>
  {#if keyboardImage}
    <img
      src={keyboardImage}
      alt="keyboard"
      style="--image-pos-x: {$imagePositionX}%;--image-pos-y: {$imagePositionY}%"
    />
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
