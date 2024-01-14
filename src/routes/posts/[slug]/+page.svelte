<script>
  export let data;
</script>

<article>
  <h1 style="text-align:center; font-size:24px">{data.title}</h1>
  <svelte:component this={data.content} />
</article>

<style>
  article {
    padding: 1rem;
  }
</style>
