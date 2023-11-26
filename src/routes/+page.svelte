<script>
  import { Body } from "$lib/components/Body";
  export let data;

  let filter = [];
  function tagFilter(tags) {
    if (filter.indexOf(tags) == -1) filter.push(tags);
    else filter = filter.filter((tag) => tag != tags);
  }
</script>

<Body>
  <h2>I like creating things. This is a log of all things I create.</h2>
  <div class="filterBar" style="display: flex;flex-direction:row">
    {#each data.allTags as tags}
      <button on:click={tagFilter(tags)}>
        <h3>{tags}</h3>
      </button>
    {/each}
  </div>

  {#each data.allPosts as post}
    <h3>{post.tags}</h3>
    <p>{filter.includes(post.tags)}: {filter}: {post.tags}</p>
    {#if filter.includes(post.tags)}
      <h3>{post.tags}</h3>
      <a href={post.path}>
        <h3>{post.meta.title}</h3>
      </a>
    {/if}
  {/each}
</Body>

<style>
</style>
