import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/container';
import Dotdotdot from 'react-dotdotdot';

export default function Home() {
  return (
    <Container>
      <section className="flex flex-col items-center mb-24">
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
        <p className="items-center mt-8 text-center text-gray-300 sm:w-11/12 sm:text-left md:prose-lg">
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
        <h2 className="mb-6 text-xl  sm:text-2xl font-semibold tracking-wide border-b-2 leading-9 border-orange text-orange text-gradient mb-9">
          Latest Writings
        </h2>
        <div className="flex flex-col w-11/12 space-y-5">
          <div className="blog-item space-y-4">
            <div className="flex flex-col items-center justify-between mb-2 sm:flex-row space-y-1">
              <h3 className="text-lg font-semibold sm:text-xl max-w-max">
                2020 to 2021 Yearly Review
              </h3>
              <p className="text-sm sm:text-md text-gray-300">
                January 1st, 2020
              </p>
            </div>
            <Dotdotdot clamp={4}>
              <p className="text-gray-300 prose">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis ratione officia unde aliquam deleniti alias, delectus
                rem possimus facilis. Dolorem dignissimos saepe similique atque
                tenetur delectus in, quidem ea quaerat.
              </p>
            </Dotdotdot>
          </div>
        </div>
      </section>
    </Container>
  );
}
