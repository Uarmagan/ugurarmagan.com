import { parseISO, format } from 'date-fns';
import Link from 'next/link';
import Container from './container';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container>
      <div className="py-24 overflow-hidden">
        <article className="px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <a className="text-sm text-gray-400">← Go Back</a>
          </Link>
          <div className="flex flex-col justify-left space-y-3 mt-10">
            <h1 className="block text-3xl font-extrabold tracking-tight text-orange sm:text-4xl">
              {frontMatter.title}
            </h1>
            <p className="text-sm text-gray-300">
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <div className="mx-auto mt-5 prose dark:prose-dark prose-lg leading-8">
            {children}
          </div>
        </article>
      </div>
    </Container>
  );
}
