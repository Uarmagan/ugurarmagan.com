import Dotdotdot from 'react-dotdotdot';

export default function BlogItem() {
  return (
    <div className="flex flex-col w-11/12 space-y-5 mb-24">
      <div className="blog-item space-y-4">
        <div className="flex flex-col items-center justify-between mb-2 sm:flex-row space-y-1">
          <h3 className="text-lg font-semibold sm:text-xl max-w-max">
            2020 to 2021 Yearly Review
          </h3>
          <p className="text-sm text-gray-300 sm:text-md">January 1st, 2020</p>
        </div>
        <Dotdotdot clamp={4}>
          <p className="text-gray-300 prose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            ratione officia unde aliquam deleniti alias, delectus rem possimus
            facilis. Dolorem dignissimos saepe similique atque tenetur delectus
            in, quidem ea quaerat.
          </p>
        </Dotdotdot>
      </div>
    </div>
  );
}
