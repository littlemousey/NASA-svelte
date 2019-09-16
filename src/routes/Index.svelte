<script>
  import Planet from "../components/Planet.svelte";
  import { onMount } from "svelte";
  import api from "../services/apiCall";

  let images = [];
  onMount(async () => {
    let response = await api.rovers();
    images = response.photos;
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
