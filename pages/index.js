import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/container';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center w-11/12 max-w-3xl mx-auto mt-20 sm:flex-row space-y-5 sm: space-x-8">
          <Image
            src="/images/avatar.jpg"
            alt="Picture of the author"
            height={140}
            width={140}
            className="rounded-full"
          />
          <div className="flex flex-col items-center justify-center sm:items-start sm:whitespace-nowrap">
            <h1 className="mb-3 text-3xl font-bold tracking-wide text-center sm:mb-0 sm:text-4xl leading-14">
              HI, MY NAME IS UGUR
            </h1>
            <h3 className="my-2 text-xl sm:text-2xl">
              Welcome To My Internet Home
            </h3>
          </div>
        </div>
        <p className="items-center w-11/12 mt-8 text-gray-400 prose-lg">
          I’m a Full-Stack Developer based in Chicago with a focus in Javascript
          and Typescript. I write my thoughts on my Blog. If you have any web
          development needs, please reach out! If you want to say hi, connect
          with me on{' '}
          <Link href="https://stackoverflow.com/" passHref color->
            Twitter
          </Link>
          !
        </p>
      </div>
    </Container>
  );
}
