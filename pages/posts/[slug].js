import { useRouter } from "next/router";
import PostContentPage from "../../components/posts/post-detail/post-content";
import { getPostBySlug } from "../../lib/posts.utill";
import Head from "next/head";

function SinglePostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostContentPage post={post} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  return {
    props: {
      post,
    },
  };
}

export default SinglePostPage;
