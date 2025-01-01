import Image from "next/image";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

function PostContentPage({ post }) {
  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];

      return (
        <SyntaxHighlighter
          language={language}
          children={children}
          style={atomDark}
        />
      );
    },
    // p(paragraph) {
    //   const { node } = paragraph;
    //   if (node.children[0].tagName === "img") {
    //     const image = node.children[0];
    //     return (
    //       <div className={classes.image}>
    //         {" "}
    //         <Image
    //           src={`/images/posts/${post.slug}/${image.properties.src}`}
    //           alt={image.alt}
    //           width={600}
    //           height={300}
    //         />
    //       </div>
    //     );
    //   }
    //   return <p>{paragraph.children}</p>;
    // },
  };
  return (
    <article className={classes.content}>
      <PostHeader
        title="Getting Started with NextJS"
        image={`/images/posts/${post.slug}/${post.image}`}
      />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContentPage;
