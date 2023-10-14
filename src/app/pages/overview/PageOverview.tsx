import { useContext, useEffect, useState } from "react";
import Page from "../../components/Page";
import PageShimmer from "../../components/PageShimmer";
import ProductSellTable from "../../components/ProductSellTable";
import { UserContext } from "../../context/contexts";
import SearchInput from "../../components/SearchInput";

const PageOverview = () => {
    const [showShimmer, setShowShimmer] = useState(true);

    // User Information
    const { userInfo } = useContext(UserContext);

    useEffect(() => {
        const pageDataLoading = setTimeout(() => setShowShimmer(false), 1000);
        return () => clearTimeout(pageDataLoading);
    })

    return (
        <Page name="customers">
            <div className="flex w-full h-full">
                {showShimmer && <PageShimmer />}

                {!showShimmer && (
                    <div className="flex flex-col gap-8 w-full">
                        <div className="search-page flex gap-4 items-center justify-between">
                            <p>Hello, {userInfo.info.name} 👋🏻</p>
                            <SearchInput />
                        </div>

                        <h1 className="font-bold text-[60px] uppercase">Overview Page</h1>
                        <ProductSellTable />
                    </div>
                )}
            </div>
        </Page>
    )
}

export default PageOverview