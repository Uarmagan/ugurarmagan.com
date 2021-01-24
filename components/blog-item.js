import Dotdotdot from 'react-dotdotdot';
import Link from 'next/link';

export default function BlogItem({ title, publishedAt, description, slug }) {
  return (
    <Link href={`/${slug}`}>
      <div className="flex flex-col w-11/12 space-y-5 mb-24 cursor-pointer">
        <div className="blog-item space-y-4">
          <div className="flex flex-col items-center justify-between mb-2 sm:flex-row space-y-1">
            <h3 className="text-lg font-semibold sm:text-xl max-w-max">
              {title}
            </h3>
            <p className="text-sm text-gray-300 sm:text-md">{publishedAt}</p>
          </div>
          <Dotdotdot clamp={4}>
            <p className="text-gray-300 prose">{description}</p>
          </Dotdotdot>
        </div>
      </div>
    </Link>
  );
}
