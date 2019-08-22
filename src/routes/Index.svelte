<script>
  import Planet from "../components/Planet.svelte";
  import { onMount } from "svelte";

  const API_KEY = "5xD0LBTBVeomPvs4zU5jCsHB1TdxDoGJauIMPohq";
  let images = [];
  onMount(async () => {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
    );
    const data = await response.json();
    images = data.photos;
    console.log(images);
  });
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>

<h1>Mars Rover Photos</h1>

<div class="grid">
  {#each images as image}
    <Planet src={image.img_src} info={image.earth_date} />
  {:else}
    <p>loading...</p>
  {/each}
</div>
