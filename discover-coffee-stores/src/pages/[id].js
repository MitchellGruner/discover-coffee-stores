import Head from "next/head";
import { useRouter } from "next/router";

const Dynamic = () => {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.id}</title>
            </Head>
            <h1>Page {router.query.id}</h1>
        </div>
    )
}

export default Dynamic;