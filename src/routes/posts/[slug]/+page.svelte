<script>
  export let data;
  console.log(data);
</script>

<article>
  <h1>{data.title}</h1>
  <svelte:component this={data.content} />
</article>

<style>
  article {
    padding: 1rem;
  }
</style>
