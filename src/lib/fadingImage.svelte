<script>
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
        if (index >= rawData.results.length-1) {
            index = 0;
        }
        keyboardData = rawData.results[index++];
        keyboardImage = keyboardData.urls.raw;
        
    }
    console.log(keyboardImage);
</script>

<section>
    {#if keyboardImage}
        <img src="{keyboardImage}"/>
    {/if}
</section>

<style>
    img {
        object-fit: cover;
        overflow: clip;
        height: 100%;
        width: 100%;
    }
    section {
        width: 100vw;
        height: 50vh;
    }
</style>