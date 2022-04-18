import { createSlice } from "@reduxjs/toolkit";

/**
 * Estado Inicial
 */
const initialState = {
    username: "",
    profilePicture: "",
    followers: 100,
    following: 220,
    posts: 340,
    about: "Learnig React Native Expo, Redux, Hooks, etc... 👨🏻‍💻🎉🪝🚀🎸💻📱",
    followedBy: ['elonMusk', 'billGates', 'markZuckerberg'],
}

/**
 * Creamos el Slice
 */
export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    //Acciones
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                username: action.payload.username,
                profilePicture: action.payload.profilePicture,
                followers: state.followers,
                following: state.following,
                posts: state.posts,
                about: state.about,
                followedBy: state.followedBy,
            }
        },
        logout: (state) => {
            return {
                ...state,
                username: "",
                profilePicture: "",
                followers: 0,
                following: 0,
                posts: 0,
                about: "",
                followedBy: [],
            }
        }
    }
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;