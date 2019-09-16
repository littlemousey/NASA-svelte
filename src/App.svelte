<script>
  import { Router, links, Route } from "svelte-routing";
  import Index from "./routes/Index.svelte";
  import Test from "./routes/Test.svelte";
  import ImageOfTheDay from "./routes/ImageOfTheDay.svelte";

  export let url = "";
</script>

<style>
  :global(body) {
    background-color: black;
    font-family: "Open Sans", sans-serif;
  }
  a {
    color: white;
  }
</style>

<Router {url}>
  <nav class="navigation">
    <a href="/">Home</a>
    <a href="test">test</a>
    <a href="imageoftheday">Image of the day</a>
  </nav>
  <div>
    <Route path="test" component={Test} />
    <Route path="imageoftheday" component={ImageOfTheDay} />
    <Route path="/">
      <Index />
    </Route>
  </div>
</Router>
