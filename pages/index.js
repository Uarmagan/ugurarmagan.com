import Image from 'next/image';
import Link from 'next/link';
import BlogItem from '../components/blog-item';
import { getAllFilesFrontMatter } from '../lib/mdx';
import Container from '../components/container';

export default function Home({ posts }) {
  return (
    <Container>
      <section className="flex flex-col items-center mb-32">
        <div className="flex flex-col items-center w-11/12 max-w-3xl mx-auto mt-20 sm:flex-row space-y-5 sm:space-x-8">
          <Image
            src="/images/avatar.jpg"
            alt="Picture of the author"
            height={140}
            width={140}
            className="rounded-full"
            priority
          />
          <div className="flex flex-col items-center justify-center sm:items-start sm:whitespace-nowrap">
            <h1 className="mb-3 text-3xl font-bold tracking-wide text-center sm:mb-0 sm:text-4xl leading-14 text-gradient">
              HI, MY NAME IS UGUR
            </h1>
            <h3 className="text-xl sm:text-2xl">Welcome To My Internet Home</h3>
          </div>
        </div>
        <p className="items-center mt-8 text-center text-gray-300 sm:w-11/12 sm:text-left prose">
          I’m a Full-Stack Developer based in Chicago with a focus in Javascript
          and Typescript. I write a little about life, building on the internet,
          and tech. If you have any web development needs, please reach out! If
          you want to say hi, connect with me on{' '}
          <Link href="https://twitter.com/UgurArma" passHref>
            <span className="font-semibold cursor-pointer text-neon">
              Twitter
            </span>
          </Link>
          !
        </p>
      </section>

      <section className="flex flex-col items-center w-full my-10">
        <h2 className="mb-6 text-2xl font-semibold tracking-wide border-b-2 leading-9 border-orange text-orange text-gradient mb-9">
          Latest Writings{' '}
        </h2>
        {!posts.length && 'No posts found.'}
        {posts.length &&
          posts.map((frontMatter) => (
            <BlogItem key={frontMatter.title} {...frontMatter} />
          ))}
      </section>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();
  return { props: { posts } };
}
