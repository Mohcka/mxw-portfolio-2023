import path from "path";
import fs from "fs";
import matter from "gray-matter";

export const findMdxFiles = (dir: string) => {
  let results: string[] = [];

  // Read the contents of the directory
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    // If it's a directory, recurse into it
    if (stat.isDirectory()) {
      results = results.concat(findMdxFiles(fullPath));
    } else {
      // If it's an .mdx file, add it to the results
      if (path.extname(item) === ".mdx") {
        results.push(fullPath);
      }
    }
  }

  return results;
}

export const getPost = ({ fullslug }: { fullslug: string }) => {
  const markdownFile = fs.readFileSync(path.join(fullslug), 'utf-8')

  const { data: frontMatter, content } = matter(markdownFile)

  return {
    frontMatter,
    slug: fullslug,
    content
  }
}