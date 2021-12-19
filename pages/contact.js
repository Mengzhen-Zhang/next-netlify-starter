import Head from 'next/head'
import { useStyletron } from 'baseui';

import Header from '@components/Header';
import Footer from '@components/Footer';


const Home = () => {
  const [css, theme] = useStyletron()

  return (
    <div className="Container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={css({ maxWidth: "800px", margin: "auto" })}>

        <Header title="Mengzhen Zhang" />



      </main>

      <Footer />
    </div>
  )
}

export default Home;
