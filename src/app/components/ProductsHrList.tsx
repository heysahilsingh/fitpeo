import { UserContext } from "../context/contexts";
import { TypeProductInfo } from "../typeDefinitions/TypeProductInfo"
import formatAmount from "../utils/formatAmount"
import { useContext, useState } from 'react';

type ProductsHrListProps = {
    className?: string,
    products: TypeProductInfo[],
    hideHeader?: true,
}

const ProductsHrList = (props: ProductsHrListProps) => {

    const { userInfo } = useContext(UserContext);

    const [visibleProducts, setVisibleProducts] = useState(10);

    return (
        <div className={`product-hr-list max-h-[70vh] overflow-auto lg:overflow-x-hidden flex flex-col bg-white dark:bg-zinc-900 ${props.className || ""}`}>
            {props.products.length > 1 && (
                <div className="products-list grid grid-cols-1 w-max lg:w-full">
                    {!props.hideHeader && (
                        <div className="header flex items-center gap-2 text-xs border-b w-full pb-5 mb-5 z-[10] sticky -top-[1px] bg-white dark:bg-zinc-900 font-medium text-[13px] border-zinc-200 dark:border-zinc-700 leading-none">
                            <p className="w-[80%] mr-5 lg:w-[30%] lg:mr-10 grow">Product Name</p>
                            <p className="min-w-[90px] w-[90px]">Stock</p>
                            <p className="min-w-[90px] w-[90px]">Price</p>
                            <p className="min-w-[90px] w-[90px]">Sell</p>
                        </div>
                    )}

                    <div className="flex flex-col gap-4">
                        {props.products.slice(0, visibleProducts).map(product => (
                            <div key={product.id} className="product flex items-center gap-2 text-sm">
                                <div className="max-w-[280px] w-[80%] mr-5 lg:max-w-none lg:w-[30%] lg:mr-10 grow flex items-center gap-3">
                                    <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800 min-w-[6rem] w-24 aspect-[4/2.5] h-fit rounded-md overflow-hidden">
                                        <img className="object-cover w-full h-full" src={product.images[0]} alt={product.title} />
                                    </div>
                                    <div className="w-2/4 grow flex flex-col">
                                        <p className="w-full text-base overflow-hidden whitespace-nowrap text-ellipsis font-semibold">{product.title}</p>
                                        <p className="w-full overflow-hidden whitespace-nowrap text-ellipsis opacity-50 text-xs">{product.description}</p>
                                    </div>
                                </div>
                                <div className={`min-w-[90px] w-[90px] ${product.stock < 1 ? "text-red-600" : ""}`}>{product.stock} in stock</div>
                                <div className="min-w-[90px] w-[90px] font-bold">{userInfo.info.currency} {formatAmount(product.price)}</div>
                                <div className="min-w-[90px] w-[90px]">{parseInt(String(product.rating * 50))}</div>
                            </div>
                        ))}
                    </div>

                    {/* Load more */}
                    {(props.products.length > 5 && visibleProducts < props.products.length) && (
                        <div className="lg:mx-auto">
                            <button
                                className="mt-8 lg:mt-12 py-4 px-12 leading-none rounded-md bg-primary text-white hover:opacity-80"
                                onClick={() => setVisibleProducts(props.products.length)}
                            >
                                View all
                            </button>
                        </div>
                    )}
                </div>
            )}

            {props.products.length < 1 && (
                <div className="flex items-center justify-center p-4 font-bold text-2xl">There's no product to be shown here.</div>
            )}
        </div>
    )
}



export const ProductsHrListShimmer = () => {
    return (
        <div className="flex flex-col gap-6 justify-between w-full">
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
    )
}

export default ProductsHrList