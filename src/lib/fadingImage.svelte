<script>
  import { tweened } from "svelte/motion";

  let imagePositionY;
  const BASE_URL = "https://api.unsplash.com/search/photos";
  const AUTHORIZATION = "client_id=Ca5OEr6brF6hFhF--FoVw0f_UnIGPP1CtPdnrjmp9Mo";
  let keyboardData;
  let keyboardImage;
  let rawData;
  let index = 0;
  fetch(`${BASE_URL}?page=1&query=mechanical-keyboard&${AUTHORIZATION}`)
    .then((response) => response.json())
    .then((data) => {
      rawData = data;
      setInterval(changeImage, 20500);
    });

  function changeImage() {
    if (!imagePositionY) {
      imagePositionY = tweened(20, {
        duration: 20000,
      });
    }
    if ($imagePositionY == 20) {
      if (index >= rawData.results.length - 1) {
        index = 0;
      }
      keyboardData = rawData.results[index++];
      keyboardImage = keyboardData.urls.raw;
      imagePositionY.set(80);
    } else {
      imagePositionY.set(20);
    }
  }
</script>

<section>
  {#if keyboardImage}
    <img
      src={keyboardImage}
      alt="keyboard"
      style="--image-pos-y: {$imagePositionY}%"
    />
  {/if}
</section>

<style>
  img {
    object-fit: cover;
    object-position: 50% var(--image-pos-y);
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
  section {
    width: 100%;
    height: 50vh;
  }
</style>
