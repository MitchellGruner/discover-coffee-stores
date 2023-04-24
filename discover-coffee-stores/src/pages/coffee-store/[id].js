import {useRouter} from "next/router";
import Link from "next/link";

import coffeeStoresData from "../../../data/coffee-stores.json";

export function getStaticProps(staticProps) {
    const params = staticProps.params;

    return {
        props: {
            coffeeStore: coffeeStoresData.find(coffeeStore => {
                return coffeeStore.id.toString() === params.id;
            }),
        },
    };
}

export function getStaticPaths() {
    return {
        paths: [
            { params: { id: '0' } },
            { params: { id: '1' } },
            { params: { id: '300'} }
        ],
        fallback: true
    }
}

const CoffeeStore = (props) => {
    const router = useRouter();

    return (
        <div>
            Coffee Store Page {router.query.id}
            <Link href="/">
                Back to Home
            </Link>
            <p>{props.coffeeStore.address}</p>
            <p>{props.coffeeStore.name}</p>
        </div>
    );
};

export default CoffeeStore;