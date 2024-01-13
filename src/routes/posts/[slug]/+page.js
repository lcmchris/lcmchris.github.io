export async function load({ params }) {
	const post = await import(`../${params.slug}.svx`);

	const title = post.metadata.title;
	const content = post.default;

	return {
		content,
	};
}