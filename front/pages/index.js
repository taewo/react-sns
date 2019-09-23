import AppLayout from '../components/AppLayout';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        {/* <link rel="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.4/antd.css" /> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.4/antd.css"></script>
      </Head>
      <AppLayout>
        <Link href="/about"><a>About</a></Link>
        <div>Hello, Next!</div>
      </AppLayout>
    </>
  );
};

export default Home;