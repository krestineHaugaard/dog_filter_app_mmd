export const metadata = {
  title: "Frontpage",
  description: "allethe dogs",
};

export default async function Home() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(url);
  const data = await res.json();

  return (
    <main>
      <h1>Hello world</h1>
      <img src="data" alt="random dog picture" />
    </main>
  );
}
