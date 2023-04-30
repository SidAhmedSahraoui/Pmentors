import {
    SET_LOADING,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    AUTH_ERROR,
    CLEAR_ERRORS,
    PROFILE_LOADED,
    SET_LOADING_PROFILE,
    UPDATE_PROFILE,
    UPDATE_PASSWORD,
    PROFILE_ERROR,
} from '../constants';
import { AnyAction } from 'redux'
import toast from "react-hot-toast";

const initialState = {
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
    isAuthenticated: null,
    loading: true,
    loading_profile: true,
    user: null,
    error: null,
};

export default (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            toast('Welcome!',
                {
                    icon: '👏',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            };

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload,
            };

        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            toast.error(action.payload || "Unknown problem")

            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload || null,
            };

        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };

        case PROFILE_LOADED:
            return {
                ...state,
                loading_profile: false,
                user: action.payload,
            };

        case SET_LOADING_PROFILE:
            return {
                ...state,
                loading_profile: true,
            };

        case UPDATE_PROFILE:
        case UPDATE_PASSWORD:
            toast.success("Profile updated")
            return {
                ...state,
                loading_profile: false,
            };

        case PROFILE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading_profile: false,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};
