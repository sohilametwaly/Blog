import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts.utill";
import Head from "next/head";

function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All blog posts" />
      </Head>{" "}
      <AllPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

export default AllPostsPage;
