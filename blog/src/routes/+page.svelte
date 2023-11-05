<script>
  import { Footer } from "$lib/components/Footer";
  import { Header } from "$lib/components/Header";

  export let data;

  console.log(data);
</script>

<Header />
<main>
  <h2>I like creating things. This is a log of all things I create.</h2>
  <p>List</p>
  {#each data.posts as post}
    <a href={post.path}>
      <h3>{post.meta.title}</h3>
    </a>
  {/each}
</main>

<Footer />

<style>
  main {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
</style>
