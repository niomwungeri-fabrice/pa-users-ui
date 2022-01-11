import { api } from '../api/_DATA';
import { createState, useState } from '@hookstate/core';

const initialState = {
    isLoggedIn: false,
    me: {},
    isLoading: false,
    hasAccount:false,
    message: '',
    users: []
};

const authState = createState(initialState);

export const login = async (email, password) => {
    authState.set({ ...initialState, isLoading: true })
    try {
        const { data } = await api.post("/signin", { email, password });
        authState.set({
            ...initialState,
            me: { data: data.data, user: data.user },
            isLoggedIn: true,
            isLoading: false
        });
    } catch (error) {
        authState.set({ ...initialState, message: "Username and Password Don't match!", isLoading: false })
    }

};

export const signUp = async (email, password, confirmPassword, names) => {

    authState.set({ ...initialState, isLoading: true })
    try {
        if (password !== confirmPassword) {
            authState.set({ ...initialState, message: "Password confirmation Don't match!", isLoading: false });
            return;
        }
        const { data } = await api.post("/signup", { email, password, names, gender: 'OTHER' });
        authState.set({
            ...initialState,
            me: { data: data.data, message: data.message },
            isLoading: false,
            hasAccount: true,
        });

    } catch (error) {
        authState.set({ ...initialState, message: error.response.data.message, isLoading: false })
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
