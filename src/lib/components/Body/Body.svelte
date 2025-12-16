<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<main>
  {@render children?.()}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 2rem 1rem;
    align-items: center;
  }

</style>
