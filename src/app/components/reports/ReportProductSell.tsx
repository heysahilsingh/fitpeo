import { DropdownSelector, NetwrokError, ProductsHrList, ProductsHrListShimmer, SearchInput } from "../components"
import { useState } from 'react';
import { useEffect } from 'react';
import { TypeProductInfo } from "../../typeDefinitions/TypeProductInfo";
import themeStyle from "../../themeStyle";
import constants from './../../constants';

type ReportProductSellProps = {
    className?: string
}

const ReportProductSell = (props: ReportProductSellProps) => {

    // Products
    const [products, setProducts] = useState<TypeProductInfo[]>([]);
    const [filteredProducts, setfilteredProducts] = useState<TypeProductInfo[]>([]);

    // Shimme, Error and no product found
    const [showProductsShimmer, setShowProductsShimmer] = useState(true);
    const [showProductsError, setShowProductsError] = useState(false);

    const [noProductFound, setNoProductFound] = useState(false);

    // Handle product search
    const handleProductSearch = (keyword: string) => {
        if (keyword == "") setfilteredProducts(products);
        else {
            const filtered = products.filter(product => product.title.toUpperCase().includes(keyword.toUpperCase()));

            setfilteredProducts(filtered)

            if (filtered.length > 0) {
                if (noProductFound) setNoProductFound(false)
            } else {
                if (!noProductFound) setNoProductFound(true)
            }
        }
    }

    // Fetch product data
    const fetchProducts = async () => {
        try {
            if (!showProductsShimmer) setShowProductsShimmer(true);
            if (showProductsError) setShowProductsError(false);
            if (noProductFound) setNoProductFound(false)

            const response = await fetch('https://dummyjson.com/products');
            const responseData = await response.json();

            if (responseData) {
                setProducts(responseData.products);
                setfilteredProducts(responseData.products);
                // Hide loader
                setShowProductsShimmer(false)
            } else throw new Error()

        } catch (error) {
            console.log(error);

            if (showProductsShimmer) setShowProductsShimmer(false);
            if (!showProductsError) setShowProductsError(true);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className={`report-product-sell flex flex-col rounded-xl bg-white dark:bg-zinc-900 ${props.className || ""}`}>
            {/* Heading, Search and Filter by period */}
            <div className="px-4 py-6 lg:py-4 lg:px-8 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
                <div className={`w-full lg:w-fit grow ${themeStyle.H1_STYLE}`}>Product Sell</div>

                <SearchInput
                    showSearchIcon className="w-[20%] grow lg:grow-0 border-0 bg-zinc-100"
                    searchCallback={handleProductSearch}
                    placeholder="Search product"
                />

                <DropdownSelector
                    options={constants.filterByPeriodOptions}
                    onSelect={() => fetchProducts()}
                />
            </div>

            <div className="px-4 pt-2 pb-8 lg:px-8 lg:pt-4 w-full">
                {/* Products list Shimmer */}
                {(showProductsShimmer && !showProductsError) && <ProductsHrListShimmer />}

                {/* Products list */}
                {!(showProductsShimmer || showProductsError) && (filteredProducts.length > 1) && (
                    <ProductsHrList className="" products={filteredProducts} />
                )}

                {/* Network Error */}
                {(!showProductsShimmer && showProductsError) && <NetwrokError />}

                {/* No product Found */}
                {noProductFound && (
                    <div className="bg-pruple-600 flex p-4 items-center justify-center">
                        <h1 className='leading-[120%] text-center text-xl w-full opacity-50'>No product found.</h1>
                    </div>
                )}
            </div>
        </div>
    )
}

export const ReportProductSellShimmer = () => {
    return (
        <div className="flex flex-col rounded-xl bg-white dark:bg-zinc-900 ">
            <div className="py-4 px-8 flex justify-between">
                <div className="h-7 w-[50%] lg:w-[20%] rounded-xl shimmer-bg"></div>
                <div className="h-7 w-[10%] lg:w-[20%] rounded-xl shimmer-bg"></div>
            </div>
            <hr className="border-0 border-b-[1px] border-zinc-200 dark:border-zinc-800" />
            <div className="py-4 px-8 flex flex-col gap-6 justify-between">
                <div className="flex justify-between gap-4">
                    <div className="h-7 min-w-[80%] lg:min-w-[50%] grow rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="h-7 min-w-[80%] lg:min-w-[50%] grow rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="h-7 min-w-[80%] lg:min-w-[50%] grow rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="h-7 min-w-[80%] lg:min-w-[50%] grow rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="h-7 min-w-[80%] lg:min-w-[50%] grow rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                </div>
            </div>
        </div>
    )
}

export default ReportProductSell
