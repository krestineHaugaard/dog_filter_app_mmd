import { notFound } from "next/navigation";

// [slug]/page.js
export async function generateStaticParams() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const url = `https://nice-dogs.vercel.app/api/dogs?slug=${slug}`;
  const res = await fetch(url);
  if (res.status !== 200) return notFound();

  const data = await res.json();

  return {
    title: data.name,
    description: `Here is ${data.name}`,
  };
}

export default async function DogPage({ params }) {
  const { slug } = params;

  const url = `https://nice-dogs.vercel.app/api/dogs?slug=${slug}`;
  const res = await fetch(url);

  if (res.status !== 200) return notFound();

  const data = await res.json();

  return (
    <main>
      <h1>{data.name}</h1>
      <p>
        {data.name} is {data.age} {data.age === "1" ? "year" : "years"} old.
      </p>
      <p>
        {data.favouriteColor === undefined
          ? ""
          : `${data.name}s favorite color is ${data.favouriteColor}.`}
      </p>
    </main>
  );
}
