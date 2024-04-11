import Image from "next/image";

async function getHenry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  return await res.json();
}

export async function generateMetadata() {
  const { name, age } = await getHenry();
  return {
    title: name,
    description: `${name} is ${age} years old`,
  };
}

export default async function HenryPage() {
  const { name } = await getHenry();
  return (
    <main>
      <Image
        src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
        alt="A cute dog"
        width={3024}
        height={4032}
        priority={true} // disables lazy load
      />
      <h1>{name}</h1>
    </main>
  );
}
