<script>
  import { onMount } from "svelte";
  import api from "../services/apiCall";

  let image;
  onMount(async () => {
    image = await api.imageOfTheDay();
  });
</script>

<h1>Image of the day</h1>
{#if image}
  <figure>
    <img src={image.url} alt={image.title} />
    <figcaption>{image.title}</figcaption>
  </figure>
{/if}
