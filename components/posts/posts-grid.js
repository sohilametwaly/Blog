import PostItemPage from "./post-item";
import classes from "./posts-grid.module.css";
function PostsGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItemPage
          key={post.slug}
          title={post.title}
          slug={post.slug}
          date={post.date}
          excerpt={post.excerpt}
          image={post.image}
        />
      ))}
    </ul>
  );
}

export default PostsGrid;
