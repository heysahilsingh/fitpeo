import { IconChevronDown, IconLogout, IconSettings } from "@tabler/icons-react"
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/contexts";
import { useClickOutside } from "../../hooks/hooks";
import { IconMoonStars } from "@tabler/icons-react";


const UserAction = () => {
    const { userInfo, updateUserInfo } = useContext(UserContext);

    // User settings wrapper
    const [showUserSetting, setShowUserSetting] = useState(false);
    const userWrapperRef = useRef(null);
    const userSettingRef = useRef(null);

    // Set the showUserSetting state to false if clicked outside the userSettingRef.
    useClickOutside([userWrapperRef, userSettingRef], () => setShowUserSetting(false));

    // Handle logout functionality
    const handleLogout = () => {
        updateUserInfo({
            ...userInfo,
            auth: {
                loggedIn: false
            }
        });

        setShowUserSetting(false)
    };

    // Handle darkMode
    const handleDarkMode = () => {
        const htmlEl = document.documentElement;
        htmlEl.classList.contains('dark') ? htmlEl.classList.remove('dark') : htmlEl.classList.add('dark')
    }

    return (
        <div className="user relative">
            <div ref={userWrapperRef} className="wrapper group transition flex gap-3 items-center rounded-lg py-2 px-3 bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.2)] cursor-pointer leading-none" onClick={() => setShowUserSetting(prev => !prev)}>
                <div className="user-img min-w-9 w-9 aspect-square rounded-full overflow-hidden">
                    <img className='w-full object-cover' src={userInfo.info.profile_img} alt="" />
                </div>
                <div className="info grow w-2/4 flex flex-col gap-0.5 capitalize">
                    <p className='text-xs font-bold max-w-full overflow-hidden whitespace-nowrap text-ellipsis'>{userInfo.info.name}</p>
                    <p className='text-[0.7rem] opacity-50 max-w-full overflow-hidden whitespace-nowrap text-ellipsis'>{userInfo.info.role}</p>
                </div>
                <div className="user-setting-controller">
                    <IconChevronDown className={`opacity-50 group-hover:opacity-100 transition ${showUserSetting ? "rotate-180" : ""}`} />
                </div>
            </div>
            {showUserSetting && (
                <div ref={userSettingRef} className="user-actions absolute top-0 -translate-y-[110%] right-0 bg-[#363666] shadow-xl z-2 rounded-lg pl-4 pr-5 py-3">
                    <div className="wrapper flex flex-col gap-3 relative">
                        <div className="flex items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100">
                            <label htmlFor="darkMode" className="cursor-pointer flex items-center gap-1.5">
                                <IconMoonStars stroke={1.5} size={22} />
                                Dark Mode
                            </label>
                            <input onChange={handleDarkMode} type="checkbox" id="darkMode" className="dark-toggle ml-3" />
                        </div>
                        <hr className='bg-white opacity-20 h-[1px] border-none' />
                        <div className="flex items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100">
                            <IconSettings stroke={1.5} size={22} />Settings
                        </div>
                        <hr className='bg-white opacity-20 h-[1px] border-none' />
                        <div onClick={handleLogout} className="flex items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100">
                            <IconLogout stroke={1.5} size={22} />Logout
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserAction