import Dotdotdot from 'react-dotdotdot';

export default function BlogItem({ title, publishedAt, description }) {
  return (
    <div className="flex flex-col w-11/12 space-y-5 mb-24">
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
  );
}
