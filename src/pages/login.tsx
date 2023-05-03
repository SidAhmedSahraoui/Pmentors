import Head from "next/head";
import Navbar from "@/components/Navbar";
import Login from "@/components/Auth/Login";

export default function index() {
    return (
        <>
            <Head>
                <title>Pmentors | Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="relative">
                <Navbar />
                <Login />
            </div>
        </>
    )
}
