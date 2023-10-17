import { createContext, useState } from 'react';
import { TypeUserInfo } from '../../typeDefinitions/TypeUserInfo';

// UserContext Type
type TypeUserContext = {
    userInfo: TypeUserInfo;
    updateUserInfo: (newInfo: TypeUserInfo) => void;
}

// Create the initial context
const getUserInfo = localStorage.getItem("userInfo");
const initialUserInfo: TypeUserInfo = getUserInfo ? JSON.parse(getUserInfo) : (
    {
        auth: {
            isLoggedIn: false
        },
        info: {
            name: "Guest",
            profile_img: "https://xsgames.co/randomusers/assets/avatars/male/76.jpg",
            role: "Project manager",
            currency: "$"
        }
    }
);

// Create the Context
const UserContext = createContext<TypeUserContext>({
    userInfo: initialUserInfo,
    updateUserInfo: () => { }
});

// Set the name for the context
UserContext.displayName = "UserContext";

// Create a Provider for the context
export const UserContextProvider = (props: React.PropsWithChildren<object>) => {
    const [userInfo, setUserInfo] = useState<TypeUserInfo>(initialUserInfo);

    const updateUserInfo = (newInfo: TypeUserInfo) => {
        const newUserInfo: TypeUserInfo = newInfo;

        // Update user DB
        localStorage.setItem("userInfo", JSON.stringify(newUserInfo));

        // Update userInfoState
        setUserInfo(newUserInfo);
    };

    const contextValue: TypeUserContext = {
        userInfo,
        updateUserInfo,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContext