<script>
  import { Body } from "$lib/components/Body";
  import { innerWidth, outerWidth } from "svelte/reactivity/window";
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

  <div class="filterBar" style="">
    {#each data.allTags as tag}
      <button class="button {filter.includes(tag)?'selected':''}" onclick={()=>tagFilter(tag)}    >
        <h3>{tag}</h3>
      </button>
    {/each}
  </div>

  {#each data.allPosts as post}
    {#if filter.length == 0 || filter.includes(post.tags)}
      <div class="post-row" >
        {#if innerWidth.current >= 800}
        <h4>{post.tags}</h4>
        {/if}

        <a href={post.path}>
          <h3>{post.meta.title}</h3>
        </a>

        {#if innerWidth.current >= 800}
        <h3>
          {new Date(post.meta.first).toLocaleDateString()}
        </h3>
        {/if}
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
  .post-row {
  display: flex; gap:10px; justify-content: space-between; width:100%; flex-wrap: wrap;
  }
  .filterBar{
    display: flex;flex-direction:row; gap:10px; border: 2px solid lightgrey; border-radius: 10px ; padding:2px ; flex-wrap: wrap; justify-content: center;
  }
</style>