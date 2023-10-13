import { useEffect, useState } from "react";
import Page from "../../components/Page";
import Shimmer from "./Shimmer";

const PageCustomers = () => {
    const [showShimmer, setShowShimmer] = useState(true);

    useEffect(() => {
        const pageDataLoading = setTimeout(() => setShowShimmer(false), 2000);

        return () => clearTimeout(pageDataLoading);
    })

    return (
        <Page name="customers">
            <div className="flex">
                {showShimmer ? <Shimmer/> : <h1>Customers Page</h1>}
            </div>
        </Page>
    )
}

export default PageCustomers