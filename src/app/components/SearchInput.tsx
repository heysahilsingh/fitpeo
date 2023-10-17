import { IconSearch, IconX } from "@tabler/icons-react"
import { ChangeEvent, useRef, useState } from "react"
import { debouncer } from './../utils/utils';

type SearchInputProps = {
    showSearchIcon: boolean,
    className?: string,
    placeholder?: string,
    searchCallback: (searchedKeyword: string) => void
}

const SearchInput = (props: SearchInputProps) => {

    const searchInputRef = useRef<HTMLInputElement | null>(null)
    const [clearSearch, setClearSearch] = useState(false);

    const debounceSearch = debouncer<string>(props.searchCallback, 500);

    // Handle search function
    const handleSearch = (element: ChangeEvent<HTMLInputElement>) => {
        if (!clearSearch) setClearSearch(true)

        const keyword = element.target.value;

        debounceSearch(keyword)

        // If input is empty
        if (keyword.trim() === "") setClearSearch(prev => !prev)
    }

    return (
        <div className={`bg-white dark:bg-zinc-800 rounded-lg text-[14px] flex gap-2 items-center border font-normal border-zinc-200 lg:py-2 py-2.5 px-3.5 leading-none focus-within:border-primary dark:border-zinc-700 dark:focus-within:border-primary ${props.className ? props.className : ""}`}>

            {props.showSearchIcon && <IconSearch className="text-zinc-600 dark:text-zinc-400 min-w-[18px]" size={18} stroke={1} />}

            <input ref={searchInputRef} onChange={handleSearch} className='appearance-none bg-transparent outline-none w-[20%] grow text-zinc-700 dark:text-zinc-300 placeholder:text-zinc-400 dark:placeholder:text-zinc-500' type="text" placeholder={props.placeholder || "Search"} />

            <div className={`min-w-[18px] w-[18px] h-[18px] rounded-full relative ${clearSearch ? "bg-zinc-200 dark:bg-zinc-700" : ""}`}>
                {clearSearch && (
                    <IconX
                        className="cursor-pointer absolute w-[70%] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-black dark:text-white"
                        size={15}
                        stroke={1}
                        onClick={() => {
                            if (searchInputRef.current) {
                                searchInputRef.current.value = "";
                                debounceSearch("");
                                searchInputRef.current.focus();
                                setClearSearch(false);
                            }
                        }}
                    />
                )}
            </div>

        </div>
    )
}

export default SearchInput