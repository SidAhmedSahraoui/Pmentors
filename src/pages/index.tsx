import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
        <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
        <div className="relative pb-20">
              <Navbar />
              <Header />
        </div>
      </>
  )
}
