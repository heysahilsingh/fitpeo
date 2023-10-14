import { useEffect, useState } from "react";
import Page from "../../components/Page";
import PageShimmer from "../../components/PageShimmer";

const PageCustomers = () => {
    const [showShimmer, setShowShimmer] = useState(true);

    useEffect(() => {
        const pageDataLoading = setTimeout(() => setShowShimmer(false), 1000);

        return () => clearTimeout(pageDataLoading);
    })

    return (
        <Page name="customers">
            <div className="flex items-center justify-center w-full h-full">
                {showShimmer ? <PageShimmer /> : <h1 className="font-bold text-[60px] uppercase">Customers Page</h1>}
            </div>
        </Page>
    )
}

export default PageCustomers