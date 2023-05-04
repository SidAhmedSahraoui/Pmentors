import Interview from "@/components/interview";
import Navbar from "@/components/Navbar";
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Index() {
  return (
    <>
        <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
        <div className="relative">
              <Navbar />
              <Interview categories={[]}/>
        </div>
      </>
  )
}