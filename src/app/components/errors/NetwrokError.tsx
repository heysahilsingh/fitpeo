import { IconWifi, IconWifi2 } from '@tabler/icons-react';

const NetwrokError = () => {
    return (
        <div className="p-6 flex flex-col items-center justify-center gap-6">
            <div className="icon relative w-40 -mb-10 h-auto aspect-square">
                <IconWifi2 size={40} className='w-full h-full absolute top-0 left-0'/>
                <IconWifi size={40} className='w-full h-full absolute top-0 left-0 opacity-20'/>
            </div>
            <h1 className='font-bold leading-[120%] uppercase text-center text-2xl w-full lg:w-[40%]'>There might be a network problem. Please refresh the page.</h1>
            <button onClick={() => window.location.reload()} className='rounded-md py-3 px-6 leading-none bg-primary text-white'>REFRESH</button>
        </div>
    )
}

export default NetwrokError