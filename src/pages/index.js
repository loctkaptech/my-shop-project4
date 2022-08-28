import Head from 'next/head';
import HomeTemplate from 'templates/home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My shop</title>
        <meta name='description' content='My shop' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <HomeTemplate />
      </main>
    </div>
  );
}
