<script>
  let { data } = $props();
</script>

<article>
  <h1 style="text-align:center; font-size:24px">{data.title}</h1>
  <data.content />
</article>

<style>
  article {
    padding: 1rem;
    max-width: 800px;
  }

</style>
