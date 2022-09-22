import { getCategories } from 'apis/fetchers/getCategories';
import { getLatestProducts } from 'apis/fetchers/getLatestProducts';
import Head from 'next/head';
import HomeTemplate from 'templates/home';

export default function Home({ latestProducts, categories }) {
  return (
    <div>
      <Head>
        <title>My shop</title>
        <meta name='description' content='My shop' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <HomeTemplate latestProducts={latestProducts} categories={categories} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const [latestProductsRes, categoriesRes] = await Promise.all([
    getLatestProducts(),
    getCategories(),
  ]);

  return {
    props: {
      latestProducts: latestProductsRes.data.data,
      categories: categoriesRes.data.data,
    },
  };
}
