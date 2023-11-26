

export const load = async ({fetch}) => {

	const allPostFiles =  import.meta.glob(`./posts/*.svx`);
    const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
						
			
			return {
				meta: metadata,
				tags: metadata.tags,
				path: path.replace('.svx', '').slice(1),
			};
		})
	);
    const allTags = allPosts.reduce((acc, post) => {
			if (!acc.includes(post.tags)) {
				acc.push(post.tags);
			}
		
		return acc;
	}
	, []);

    return {
        allPosts,
		allTags
    }
}