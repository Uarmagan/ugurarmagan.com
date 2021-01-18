import Image from 'next/image';
import Container from '../components/container';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center w-11/12 max-w-3xl mx-auto mt-20 space-y-5">
        <Image
          src="/images/avatar.jpg"
          alt="Picture of the author"
          height={150}
          width={150}
          className="rounded-full"
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-3 text-4xl font-bold tracking-wide text-center leading-14">
            HI, MY NAME IS UGUR
          </h1>
          <h3 className="my-2 text-xl">Welcome To My Internet Home</h3>
          <p className="items-center w-11/12 my-8 text-gray-400 prose-lg">
            I’m a Full-Stack Developer based in Chicago with a focus in
            Javascript and Typescript. I write about my learnings on my Blog. If
            you have any web development needs, please reach out! If you want to
            say hi, connect with me on Twitter!
          </p>
        </div>
      </div>
    </Container>
  );
}
