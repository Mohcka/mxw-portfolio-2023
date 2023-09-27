import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { areDatesSameDay } from "@/lib/dateutils";
import { findMdxFiles } from "@/lib/file-utils";

type Props = {};

const BlogsPage = (props: Props) => {
  // 1) Set blogs directory
  const blogDir = "src/blog";

  // 2) Find all files in the blog directory
  const files = findMdxFiles(blogDir);

  // 3) For each blog found
  const blogs = files.map((filename) => {
    // 4) Read the content of that blog
    const fileContent = fs.readFileSync(path.join(filename), "utf-8");
    const stat = fs.statSync(filename);

    // 5) Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent);

    // 6) Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: path.basename(filename).replace(".mdx", ""),
      createdAt: stat.birthtime,
      updatedAt: stat.mtime,
    };
  });

  return (
    <div className="flex flex-col m-4">
      <h1 className="text-2xl font-bold">Blog</h1>
      <div className="my-2">
        {blogs.map((b) => (
          <div key={b.slug} className="my-10">
            <Link href={`blogs/${b.slug}`}>
              <div className="text-xl font-semibold">{b.meta.title}</div>
              <div className="text-xs">
                {b.meta.date.toDateString()}{" "}
              </div>
              <div>{b.meta.description}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
