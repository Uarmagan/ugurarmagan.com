import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const root = process.cwd();

export default function test() {
  return 'test';
}

export async function getAllFilesFrontMatter() {
  const files = fs.readdirSync(path.join(root, 'data'));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'data', postSlug), 'utf8');
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },
      ...allPosts
    ];
  }, []);
}
