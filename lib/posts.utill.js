import fs from "fs";
import path from "path";
import matter from "gray-matter";

const filePath = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  const mypath = path.join(filePath, fileName);
  const fileContent = fs.readFileSync(mypath, "utf-8");
  const { data, content } = matter(fileContent);
  const postData = {
    slug: fileName.replace(/\.md$/, ""),
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(filePath);
  const postsArray = [];
  postFiles.forEach((fileName) => {
    const postData = getPostData(fileName);
    postsArray.push(postData);
  });
  return postsArray.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

export function getPostBySlug(slug) {
  const fileName = `${slug}.md`;
  return getPostData(fileName);
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
