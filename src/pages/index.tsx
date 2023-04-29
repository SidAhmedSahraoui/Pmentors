import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
          <Head>
              <title>Pmentors</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <div className="fixed mt-28">
              <img className="w-screen" src="./wave.svg" />
          </div>
          <div className="relative pb-20">
              <Navbar />
              <Header />
          </div>
      </>
  )
}
