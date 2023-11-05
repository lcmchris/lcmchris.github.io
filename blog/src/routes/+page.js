

export const load = async ({fetch}) => {

	const allPostFiles =  import.meta.glob(`./posts/*.svx`);
    const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
		

			return {
				meta: metadata,
				path: path.replace('.svx', '').slice(1),
			};
		})
	);
    
    return {
        posts: allPosts
    }
}