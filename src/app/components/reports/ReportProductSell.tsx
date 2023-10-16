import { IconChevronDown } from "@tabler/icons-react"
import { NetwrokError, ProductsHrList, ProductsHrListShimmer, SearchInput } from "../components"
import { useState, Fragment } from 'react';
import { useRef } from 'react';
import { useClickOutside } from "../../hooks/hooks";
import { useEffect } from 'react';
import { TypeProductInfo } from "../../typeDefinitions/TypeProductInfo";

const filterByPeriodOptions = [
    {
        title: "Last 7 days",
        id: "last7days"
    },
    {
        title: "Last 30 days",
        id: "last30days"
    },
    {
        title: "Last 3 months",
        id: "last3months"
    },
    {
        title: "Last 6 months",
        id: "last6months"
    },
    {
        title: "lifetime",
        id: "lifetime"
    }
]

type ReportProductSellProps = {
    className?: string
}

const ReportProductSell = (props: ReportProductSellProps) => {

    // Filter by period
    const [showFilterByPeriod, setShowFilterByPeriod] = useState(false);
    const filterByPeriodRef = useRef(null);
    const [selectedFilterByPeriodOption, setSelectedFilterByPeriodOption] = useState(filterByPeriodOptions[0]);

    // Set the showUserSetting state to false if clicked outside the userSettingRef.
    useClickOutside([filterByPeriodRef], () => setShowFilterByPeriod(false));

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

    useEffect(() => {
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

        fetchProducts()
    }, [selectedFilterByPeriodOption])

    return (
        <div className={`report-product-sell flex flex-col rounded-xl bg-white dark:bg-zinc-900 ${props.className || ""}`}>
            {/* Heading, Search and Filter by period */}
            <div className="px-4 py-6 lg:py-4 lg:px-8 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
                <div className="w-full lg:w-fit font-bold text-xl leading-none grow">Product Sell</div>

                <SearchInput
                    showSearchIcon className="w-[20%] grow lg:grow-0 border-0 bg-zinc-100"
                    searchCallback={handleProductSearch}
                    placeholder="Search product"
                />

                <div className="relative" onClick={() => setShowFilterByPeriod(prev => !prev)}>
                    <div className="cursor-pointer flex items-center justify-between gap-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg h-full lg:py-2 py-2.5 px-3.5 leading-none">
                        <p className="leading-none text-[14px] capitalize">{selectedFilterByPeriodOption.title}</p>
                        <IconChevronDown className={`opacity-50 group-hover:opacity-100 transition ${showFilterByPeriod ? "rotate-180" : ""}`} size={18} />
                    </div>
                    {showFilterByPeriod && (
                        <div ref={filterByPeriodRef} className="shadow-2xl absolute bottom-0 translate-y-[102%] right-0 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-1 leading-none z-20">
                            <ul className="flex flex-col gap-1">
                                {filterByPeriodOptions.map((option, index) => (
                                    <Fragment key={option.id}>
                                        <li
                                            className={`${selectedFilterByPeriodOption.id === option.id ? "bg-zinc-100 dark:bg-zinc-700 opacity-100" : "opacity-70"} min-w-max p-3 rounded-md cursor-pointer hover:opacity hover:bg-zinc-100 hover:dark:bg-zinc-700 hover:opacity-100 capitalize`}
                                            onClick={() => setSelectedFilterByPeriodOption(option)}
                                        >
                                            {option.title}
                                        </li>
                                        {index !== filterByPeriodOptions.length - 1 && (
                                            <hr className='bg-zinc-200 dark:bg-zinc-600 h-[1px] border-none' />
                                        )}
                                    </Fragment>
                                ))}
                            </ul>

                        </div>
                    )}
                </div>
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
