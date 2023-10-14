import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/contexts";
import { Page, PageShimmer, ProductSellTable, ReportSummaryCard, SearchInput } from "../../components/components";
import { IconBuildingStore, IconClipboardList, IconCoins, IconWallet } from "@tabler/icons-react";

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
                        {/* Greeting and  Search */}
                        <div className="search-page flex gap-4 items-center justify-between">
                            <p>Hello, {userInfo.info.name} 👋🏻</p>
                            <SearchInput showSearchIcon={true} className="w-[250px]" />
                        </div>

                        {/* report summary */}
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                            <ReportSummaryCard
                                name="earning"
                                icon={IconCoins}
                                iconColor="text-green-600"
                            />

                            <ReportSummaryCard
                                name="orders"
                                icon={IconClipboardList}
                                iconColor="text-purple-600"
                            />

                            <ReportSummaryCard
                                name="balance"
                                icon={IconWallet}
                                iconColor="text-blue-600"
                            />

                            <ReportSummaryCard
                                name="total sales"
                                icon={IconBuildingStore}
                                iconColor="text-rose-500"
                            />
                        </div>

                        <ProductSellTable />
                    </div>
                )}
            </div>
        </Page>
    )
}

export default PageOverview