<script>
  import { Router, Link, Route } from "svelte-routing";
  import Index from "./routes/Index.svelte";
  import Test from "./routes/Test.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="test">Test</Link>
  </nav>
  <div>
    <Route path="test" component={Test} />
    <Route path="/">
      <Index />
    </Route>
  </div>
</Router>
