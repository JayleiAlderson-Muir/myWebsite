<script>
  import { tweened } from "svelte/motion";
  import { onMount } from "svelte";

  let imagePositionY;
  const BASE_URL = "https://api.unsplash.com/search/photos";
  const AUTHORIZATION = "client_id=Ca5OEr6brF6hFhF--FoVw0f_UnIGPP1CtPdnrjmp9Mo";
  let keyboardData;
  let keyboardImage;
  let rawData;
  let index = 0;
  //fetch images for footer and initialise variables
  onMount(async () => {
    fetch(`${BASE_URL}?page=1&query=mechanical-keyboard&${AUTHORIZATION}`)
      .then((response) => response.json())
      .then((data) => {
        rawData = data;
        keyboardImage = data.results[index].urls.raw;
        imagePositionY = tweened(20, { //value will change gradually over 20 seconds
          duration: 20000,
        });
        changeImage();
        setInterval(changeImage, 21000); //image change every 21 seconds
      });
  });

  function changeImage() {
    if ($imagePositionY == 20) {
      if (index >= rawData.results.length - 1) {  //checks against the stored data from our fetch
        index = 0;                                //if we run out of images we loop back to the first
      } else {
        index++;
      }
      keyboardData = rawData.results[index];
      keyboardImage = keyboardData.urls.raw;
      imagePositionY.set(80);
    } else {
      imagePositionY.set(20);
    }
  }
</script>
<!--element is loaded when fetch is complete -->
<section>
  {#await keyboardImage then} 
    <img
      src={keyboardImage}
      alt="keyboard"
      style="--image-pos-y: {$imagePositionY}%"
    />
  {/await}
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
