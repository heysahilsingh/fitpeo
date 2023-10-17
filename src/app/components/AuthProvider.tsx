import { ReactNode, useContext, useState } from "react";
import { UserContext } from "../context/contexts";
import { IconArrowNarrowRight, IconLoader2 } from "@tabler/icons-react";
import { TypeUserInfo } from "../typeDefinitions/TypeUserInfo";

const inputCSS = "w-full bg-zinc-100 dark:1bg-zinc-800 rounded-lg text-[14px] flex gap-2 items-center border font-normal border-zinc-200 lg:py-2 py-2.5 px-3.5 leading-none focus-within:border-primary dark:1border-zinc-700 dark:1focus-within:border-primary appearance-none outline-none w text-zinc-700 dark:1text-zinc-300 placeholder:text-zinc-400 dark:1placeholder:text-zinc-500"

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { userInfo, updateUserInfo } = useContext(UserContext);

    const [showText, setShowText] = useState(true);

    const loginUser = async () => {
        setShowText(false)

        const newUserInfo: TypeUserInfo = {
            ...userInfo,
            auth: {
                loggedIn: true
            }
        }

        setTimeout(() => {
            updateUserInfo(newUserInfo)
            document.title = "Dashboard - FitPeo"
            setShowText(true)
        }, 1000)
    }

    const renderLoginForm = () => {
        document.title = "Login - FitPeo"

        return (
            <div className="w-screen h-screen flex items-center justify-center bg-[#f2f6f8] ">
                <div className="flex flex-col gap-8 px-6 py-8 rounded-xl shadow-lg border bg-white dark:1bg:zinc-900 max-lg:w-[90vw] w-[400px]">
                    <div className="flex flex-col gap-2">
                        <p className="opacity-80">Welcome to your FitPeo dashboard</p>
                        <h1 className="font-bold uppercase text-[30px] leading-none">Login</h1>
                    </div>
                    <div className="flex flex-col gap-6">
                        <input type="email" name="" id="email" placeholder="Your email" className={inputCSS} />
                        <input type="password" name="" id="password" placeholder="Your password" className={inputCSS} />
                        <div className="flex min-lg:flex-wrap gleading-[120%] gap-4">
                            <button onClick={loginUser} className="flex items-center justify-center w-fit grow px-4 py-2 text-white bg-primary hover:opacity-80 transition rounded-md">{showText ? "Login" : <IconLoader2 className="animate-spin" />}</button>
                            <div onClick={loginUser} className="flex grow justify-center items-center gap-2 text-primary text-sm min-w-fit leading-none">
                                {showText
                                    ?
                                    <>
                                        <button className="hover:opacity-80">Login as guest</button>
                                        <IconArrowNarrowRight stroke={1.5} size={18} />
                                    </>
                                    :
                                    <IconLoader2 className="animate-spin" />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (userInfo.auth.loggedIn) {
        return <>{children}</>;
    } else {
        return renderLoginForm()
    }
};

export default AuthProvider;
