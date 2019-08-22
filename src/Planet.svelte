<script>
  export let src;
  export let info;
</script>

<style>
  img {
    height: 300px;
    width: 300px;
  }
</style>

<figure>
  <img {src} alt={info} />
  <figcaption>{info}</figcaption>
</figure>
