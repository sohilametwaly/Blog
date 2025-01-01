import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";
function PostItemPage({ title, date, excerpt, image, slug }) {
  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image
            src={`/images/posts/${slug}/${image}`}
            alt={title}
            width={300}
            height={200}
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>
            {new Date(date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <p> {excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItemPage;
