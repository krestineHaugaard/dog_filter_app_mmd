async function getHenry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  return await res.json();
}

export async function generateMetadata() {
  const data = await getHenry();
  const { name, age } = data;
  return {
    title: name,
    description: `${name} is ${age} years old`,
  };
}

export default async function HenryPage() {
  const data = await getHenry();
  const { name } = data;
  return (
    <main>
      <h1>{name}</h1>
    </main>
  );
}
