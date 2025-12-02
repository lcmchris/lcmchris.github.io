export const prerender = true;
import { preloadData } from "$app/navigation";
import { render } from "svelte/server";
export const GET = async () => {
  const allPostFiles = import.meta.glob(`../posts/*.svx`);
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const post = await resolver();
      const { metadata } = post;
      const content = render(post.default).body;
      if (
        !"uuid" in metadata ||
        !"title" in metadata ||
        !"last" in metadata ||
        !"first" in metadata ||
        !content
      ) {
        throw Error(`Missing metadata for ${path}`);
      }

      return {
        meta: metadata,
        tags: metadata.tags,
        path: path.replace(".svx", "").slice(1).split("./posts/")[1],
        content: content,
      };
    })
  );

  allPosts.sort((a, b) => new Date(b.meta.first) - new Date(a.meta.first));
  const body = renderPost(allPosts);
  const headers = {
    "Cache-Control": `max-age=0, s-max-age=${600}`,
    "Content-Type": "application/atom+xml",
  };
  return new Response(body, headers);
};

const renderPost = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
<title>Chris L's blog about things</title>
<id>https://lcmchris.github.io/</id>
<link rel="alternate" href="https://lcmchris.github.io/"/>
<link rel="self" href="https://lcmchris.github.io/rss.xml"/>
<updated>${new Date().toISOString()}</updated>
<author>
<name>Chris L</name>
</author>
${posts
  .map(
    (post) => `<entry>
<title>${post.meta.title}</title>
<link rel="alternate" type="text/html" href="https://lcmchris.github.io/posts/${
      post.path
    }"/>
<id>https://lcmchris.github.io/posts/${post.path}</id>
<published>${new Date(post.meta.first).toISOString()}</published>
<updated>${new Date(post.meta.last).toISOString()}</updated>
<content type="html"><![CDATA[${post.content}]]></content>
</entry>
`
  )
  .join("")}</feed>
`;
