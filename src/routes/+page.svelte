<script>
  import { Body } from "$lib/components/Body";
  let {data} = $props()

  let filter = $state([]);
  function tagFilter(tag) {
      console.log('hi')
    const idx = filter.indexOf(tag);

    if (idx === -1) {
      filter.push(tag);
    } else {
      filter.splice(idx, 1);
    }
  }
</script>

<meta name="follow.it-verification-code" content="VRngwq1dr6ssa0NYgMEG" />

<Body>
  <h2>
    A blog of things I find interesting 
  </h2>
  <div class="filterBar" style="display: flex;flex-direction:row; gap:10px; border: 2px solid lightgrey; border-radius: 10px; padding:10px">
    {#each data.allTags as tag}
      <button class="button {filter.includes(tag)?'selected':''}" onclick={()=>tagFilter(tag)}    >
        <h3>{tag}</h3>
      </button>
    {/each}
  </div>

  {#each data.allPosts as post}
    {#if filter.length == 0 || filter.includes(post.tags)}
      <div style="display: flex; gap:10px; justify-content: space-between; width:100%; width:700px">
        <h4>{post.tags}</h4>

        <a href={post.path}>
          <h3>{post.meta.title}</h3>
        </a>

        <h3>
          {new Date(post.meta.first).toLocaleDateString()}
        </h3>
      </div>
    {/if}
  {/each}
</Body>

<style>
  .button {
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  .selected {
    background-color: aqua;
  }
</style>