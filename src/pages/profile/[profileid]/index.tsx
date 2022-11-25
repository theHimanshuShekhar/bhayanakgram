import { type NextPage } from "next";
import Head from "next/head";

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>BhayanakGRAM</title>
        <meta name="description" content="BhayanakGRAM" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <main>
        <div className="item-center mx-auto text-center text-9xl text-gray-600">
          Profile Page
        </div>
      </main>
    </>
  );
};

export default Profile;
