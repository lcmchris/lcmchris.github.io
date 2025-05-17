export async function load({ params }) {
  console.log(`../${params.slug}.svx`);
  const post = await import(`../${params.slug}.svx`);

  const title = post.metadata.title;
  const content = post.default;

  return {
    title,
    content,
  };
}
