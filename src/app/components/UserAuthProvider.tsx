import { ReactNode, useContext, useState } from "react";
import { UserContext } from "../context/contexts";
import { TypeUserInfo } from "../typeDefinitions/TypeUserInfo";

const UserAuthProvider = ({ children }: { children: ReactNode }) => {
    const { userInfo, updateUserInfo } = useContext(UserContext);
    const [loginInProgress, setLoginInProgress] = useState(false);

    const loginForm = async () => {
        try {
            setLoginInProgress(true);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            const newUserInfo: TypeUserInfo = {
                ...userInfo,
                auth: {
                    loggedIn: true
                }
            }

            updateUserInfo(newUserInfo)

            setLoginInProgress(false);
        } catch (error) {
            console.error("Login failed:", error);
            setLoginInProgress(false);
        }
    };

    // If the user is already logged in, render the children
    if (userInfo.auth.loggedIn) {
        return <div className="">{children}</div>;
    } else {
        // If login is in progress, you might want to show a loading indicator
        if (loginInProgress) {
            return <div>Loading...</div>;
        }

        // Otherwise, render the login form
        return loginForm();
    }
};

export default UserAuthProvider;
