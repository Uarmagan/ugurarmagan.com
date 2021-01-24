import hydrate from 'next-mdx-remote/hydrate';
import { getFiles, getFileBySlug } from '../lib/mdx';

import MDXComponent from '../components/mdx';
import BlogLayout from '../components/blog';

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponent
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}
export async function getStaticPaths() {
  const posts = await getFiles();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug(params.slug);

  return { props: post };
}
