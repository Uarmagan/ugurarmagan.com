import { parseISO, format } from 'date-fns';
import Container from './container';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container>
      <div className="py-32 overflow-hidden text-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col jusitfy-left space-y-3">
            <h1 className="block text-3xl font-extrabold tracking-tight text-orange sm:text-4xl">
              {frontMatter.title}
            </h1>
            <p className="text-sm text-gray-300">
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <article className="mx-auto mt-5 prose-dark prose-lg leading-8">
            {children}
          </article>
        </div>
      </div>
    </Container>
  );
}
