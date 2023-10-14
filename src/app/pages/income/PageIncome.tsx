import { useEffect, useState } from "react";
import {Page, PageShimmer} from "../../components/components";

const PageIncome = () => {
    const [showShimmer, setShowShimmer] = useState(true);

    useEffect(() => {
        const pageDataLoading = setTimeout(() => setShowShimmer(false), 1000);

        return () => clearTimeout(pageDataLoading);
    })

    return (
        <Page name="customers">
            <div className="flex items-center justify-center w-full h-full">
                {showShimmer ? <PageShimmer /> : <h1 className="font-bold text-[60px] uppercase">Income Page</h1>}
            </div>
        </Page>
    )
}

export default PageIncome