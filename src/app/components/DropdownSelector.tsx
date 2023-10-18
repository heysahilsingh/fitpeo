import { IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react';
import { useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';

type Option = {
    name: string,
    id: string | number
}

type DropdownSelectorProps = {
    className?: string,
    onSelect: (selectedOption: Option) => void,
    options: Option[],
    defaultSelectedOption?: Option
}

const DropdownSelector = (props: DropdownSelectorProps) => {

    const [showFilterByPeriod, setShowFilterByPeriod] = useState(false);

    const filterByPeriodRef = useRef(null);

    const [selectedFilterByPeriodOption, setSelectedFilterByPeriodOption] = useState<Option>(
        (props.options?.length > 1 && props.defaultSelectedOption)
            ? props.defaultSelectedOption
            : (props.options?.length > 0 ? props.options[0] : { name: "No option provided", id: 1 })
    );

    // Set the filterByPeriod state to false if clicked outside the filterByPeriodRef.
    useClickOutside([filterByPeriodRef], () => setShowFilterByPeriod(false));

    // Handle option selection
    const handleOnOptionSelect = (option: Option) => {
        setSelectedFilterByPeriodOption(option);
        props.onSelect(option)
    }

    return (
        <div ref={filterByPeriodRef} className="relative" onClick={() => setShowFilterByPeriod(prev => !prev)}>
            <div className="min-w-max cursor-pointer flex items-center justify-between gap-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg h-full lg:py-2 py-2.5 px-3.5 leading-none">
                <p className="leading-none text-[14px] capitalize">{selectedFilterByPeriodOption.name}</p>
                <IconChevronDown className={`opacity-50 group-hover:opacity-100 transition ${showFilterByPeriod ? "rotate-180" : ""}`} size={18} />
            </div>
            {showFilterByPeriod && (
                <div className="shadow-2xl absolute bottom-0 translate-y-[102%] right-2/4 translate-x-2/4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-2 leading-none z-20 min-w-fit w-max">
                    <ul className="flex flex-col gap-2">
                        {props.options?.length > 1 && props.options.map(option => (
                            <li
                                key={option.id}
                                className={`${selectedFilterByPeriodOption.id === option.id ? "bg-zinc-100 dark:bg-zinc-700 opacity-100" : "opacity-70"} min-w-max p-3 rounded-md cursor-pointer hover:opacity hover:bg-zinc-100 hover:dark:bg-zinc-700 hover:opacity-100 capitalize`}
                                onClick={() => handleOnOptionSelect(option)}
                            >
                                {option.name}
                            </li>
                        ))}
                    </ul>

                </div>
            )}
        </div>
    )
}

export default DropdownSelector