import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BhayanakGRAM</title>
        <meta name="description" content="BhayanakGRAM" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <main>
        <div className="item-center mx-auto text-center text-9xl text-gray-600">
          Home Page
        </div>
      </main>
    </>
  );
};

export default Home;
