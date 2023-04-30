<<<<<<< HEAD
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
=======
import Navbar from "../../components/Navbar";
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import axios from "axios";

export default function Interviews(props:any) {
    return (
        <>
            <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
            <div className="relative pb-20">
                <Navbar />
                
            </div>
        </>
    )
}
export async function getServerSideProps(context:any) {
    const result = await axios.get("http://localhost:7777/api/auth-service/admin/categories");
    if (result.status !== 200) {
        return new Error("Fetching data failed");
    }
    const data =   await result.data || null;
    return {
        props: { data }, // will be passed to the page component as props
    };
}
>>>>>>> c99b5e1 (Add SEO layer)
