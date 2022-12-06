import Link from "next/link";

const BlogPostPage = ({ post }) => (
  <Layout>
    <h1>{post.title}</h1>
    <p>{post.summary}</p>
    <p>{post.content}</p>

    {/* Update the Link component to include the blog-post-* file name in the `as` attribute */}
    <Link href="/openai-gpt-blog/blog-post-1.html" as={`/openai-gpt-blog/blog-post-${post.slug}.html`}>
      <a>Read more</a>
    </Link>
  </Layout>
);