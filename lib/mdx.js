import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import MDXComponent from '../components/mdx';

const root = process.cwd();

export async function getFiles(slug) {
  return slug
    ? fs.readFileSync(path.join(root, 'data', `${slug}.mdx`), 'utf8')
    : fs.readdirSync(path.join(root, 'data'));
}

export async function getAllFilesFrontMatter() {
  const files = await getFiles();
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

export async function getFileBySlug(slug) {
  const source = await getFiles(slug);
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponent,
    mdxOptions: {
      // eslint-disable-next-line global-require
      remarkPlugins: [require('remark-slug'), require('remark-code-titles')]
    }
  });

  return {
    mdxSource,
    frontMatter: {
      slug,
      ...data
    }
  };
}
