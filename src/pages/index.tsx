import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
          <Head>
              <title>Pmentors | Better interview preparing</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <div className="relative pb-20">
              <Navbar />
              <Header />
          </div>
      </>
  )
}
