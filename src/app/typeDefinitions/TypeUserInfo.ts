export type TypeUserInfo = {
    auth: {
        loggedIn: boolean
    },
    info: {
        name: string,
        profile_img: string,
        role: string,
        currency: string
    }
}