import { findMdxFiles, getPost } from "@/lib/file-utils";
import { Metadata } from "next";
import path from "path";
import fs from "fs";
import React from "react";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import rehypeHighlight from "rehype-highlight";

import "../../atomic-dark.css";
import Image from "next/image";
type Props = {
  params: { date: string; slug: string; fullSlug: string };
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const mdxFullSlug = findMdxFiles("src/blog").find(
    (f) => path.basename(f).replace(".mdx", "") === params.slug
  );
  if (!mdxFullSlug) {
    throw new Error(`Could not find slug ${params.slug}`);
  }
  const { frontMatter } = getPost({ fullslug: mdxFullSlug });

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.description,
      type: "article",
      images: [
        {
          url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80",
        },
      ],
    },
  };
};

export async function generateStaticParams() {
  const blogDir = "src/blog";

  const mdxFiles = findMdxFiles(blogDir);

  const slugs = mdxFiles.map((filename) => ({
    slug: path.basename(filename).replace(".mdx", ""),
  }));

  return slugs;
}

const page = ({ params: { slug } }: Props) => {
  // const { content } = getPost({ fullslug: fullSlug });
  const mdxFullSlug = findMdxFiles("src/blog").find(
    (f) => path.basename(f).replace(".mdx", "") === slug
  );

  if (!mdxFullSlug) {
    throw new Error(`Could not find slug ${slug}`);
  }

  const { content, frontMatter } = getPost({ fullslug: mdxFullSlug });

  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    },
  };

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:!prose-invert mx-auto">
      <div>
        <Link href="/blogs">&lt; Blogs</Link>
      </div>
      <h2>{frontMatter.title}</h2>

      <MDXRemote
        source={content}
        // @ts-ignore
        options={options}
        components={{
          img: (props) => (
            <Image
              src={props.src || ""}
              alt={props.alt || ""}
              height={200}
              width={1200}
            />
          ),
        }}
      />
    </article>
  );
};

export default page;
