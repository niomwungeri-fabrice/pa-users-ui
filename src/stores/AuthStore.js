import { createState, useState } from '@hookstate/core'
import { api } from '../api/_DATA';

const initialState = {
    isLoggedIn: false,
    me: {},
    isLoading: false,
    message: ''
};

const authState = createState(initialState);

export const login = async (email, password) => {
    authState.set({ ...initialState, isLoading: true })
    try {
        const { data, status } = await api.post("/signin", { email, password });
        if (status === 200) {
            authState.set({
                ...initialState,
                me: { data: data.data, message: data.message },
                isLoggedIn: true,
                isLoading: false
            });
        }
    } catch (error) {
        authState.set({ ...initialState, message: "Username and Password Don't match!", isLoading: false })
    }

};

export const logout = () => {
    // set authState to initial state
    authState.set(initialState);
};

// create react hook for consuming
export const useAuthState = () => {
    return useState(authState);
};
