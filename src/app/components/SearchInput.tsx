import { IconSearch } from "@tabler/icons-react"

type SearchInputProps = {
    showSearchIcon?: boolean,
    showClearBtn?: boolean,
}

const SearchInput = () => {

    return (
        <div className={`rounded-md text-[14px] grow flex gap-2 items-center border font-normal border-zinc-200 py-1.5 px-2.5 leading-none focus-within:border-primary dark:border-zinc-700 dark:focus-within:border-primary`}>
            <IconSearch className="text-zinc-600 dark:text-zinc-400" size={18} stroke={1} />
            <input className='bg-transparent outline-none grow text-zinc-700 dark:text-zinc-300 placeholder:text-zinc-300 dark:placeholder:text-zinc-500' type="search" placeholder='Search' />
        </div>
    )
}

export default SearchInput