import Head from "next/head";
import Navbar from "@/components/Navbar";
import Register from "@/components/auth/Register";

export default function index() {
    return (
        <>
            <Head>
                <title>Pmentors | Sign up</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="relative">
                <Navbar />
                <Register />
            </div>
        </>
    )
}
