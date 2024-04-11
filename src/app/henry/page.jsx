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
  const data = await getHenry();
  return (
    <main>
      <h1>{data.name}</h1>
    </main>
  );
}
