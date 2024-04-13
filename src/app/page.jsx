export const dynamic = "force-dynamic";

export const metadata = {
  title: "Frontpage",
  description: "All the dogs",
};

export default async function Home() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(url);
  const data = await res.json();

  return (
    <main>
      <h1>Hello world</h1>
      <img src={data.message} alt="random dog picture" />
    </main>
  );
}
