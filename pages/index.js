import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts.utill";
import Head from "next/head";

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Next.js Blog</title>
        <meta name="description" content="A blog built with Next.js" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getFeaturedPosts();
  return {
    props: {
      posts: posts,
    },
  };
}

export default HomePage;
