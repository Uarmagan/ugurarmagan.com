import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/container';

export default function Home() {
  return (
    <Container>
      <section className="flex flex-col items-center">
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
        <p className="items-center  mt-8 text-center text-gray-300 sm:w-11/12 sm:text-left prose">
          I’m a Full-Stack Developer based in Chicago with a focus in Javascript
          and Typescript. I write a little about life, building on the internet,
          and tech. If you have any web development needs, please reach out! If
          you want to say hi, connect with me on{' '}
          <Link href="https://twitter.com/UgurArma" passHref>
            <span className="font-semibold text-orange">Twitter</span>
          </Link>
          !
        </p>
      </section>
    </Container>
  );
}
