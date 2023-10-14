import { ReactNode } from "react"

type PageProps = {
    children: ReactNode,
    name: string
}

const Page = (props: PageProps) => {
    return (
        <div className={`${props.name || ''} page w-full h-full mt-[61px] lg:mt-0 p-4 lg:px-12 lg:py-8 bg-[#f2f6f8] dark:bg-neutral-950`}>
            {props.children}
        </div>
    )
}

export default Page