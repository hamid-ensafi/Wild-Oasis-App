import Image from "next/image";
import Link from "next/link";
import bgImage from "/public/bg.png";

export default function Home() {
  return (
    <section className="mt-24 ">
      <Image
      
        className="object-cover"
        placeholder="blur"
        fill
        src={bgImage}
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </section>
  );
}
