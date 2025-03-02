<script>
  import { Body } from "$lib/components/Body";
  import { Button } from "$lib/components/Button";
  export let data;

  let filter = [];
  function tagFilter(tags) {
    const idx = filter.indexOf(tags);

    if (idx) {
      filter.push(tags);
      filter = filter;
    } else {
      filter.splice(idx, 1);
      filter = filter;
    }
    console.log(idx, tags, filter);
  }
</script>

<meta name="follow.it-verification-code" content="VRngwq1dr6ssa0NYgMEG" />

<Body>
  <h2>
    I like creating things. This is a log of all things I create and muse.
  </h2>
  <div class="filterBar" style="display: flex;flex-direction:row; gap:10px">
    {#each data.allTags as tags}
      <Button on:click={tagFilter(tags)} selected>
        <h3>{tags}</h3>
      </Button>
    {/each}
  </div>

  {#each data.allPosts as post}
    {#if filter.length == 0 || filter.includes(post.tags)}
      <div style="display: flex; gap:10px;">
        <h4>{post.tags}</h4>

        <a href={post.path}>
          <h3>{post.meta.title}</h3>
        </a>

        <h3 style="">
          {new Date(post.meta.first).toLocaleDateString()}
        </h3>
      </div>
    {/if}
  {/each}
</Body>
