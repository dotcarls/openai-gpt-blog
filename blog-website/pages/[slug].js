import Link from "next/link";

const BlogPostPage = ({ post }) => (
  <Layout>
    <h1>{post.title}</h1>
    <p>{post.summary}</p>
    <p>{post.content}</p>

    {/* Update the Link component to include the openai-gpt-blog path */}
    <Link href="/openai-gpt-blog/[slug]" as={`/openai-gpt-blog/${post.slug}`}>
      <a>Read more</a>
    </Link>
  </Layout>
);