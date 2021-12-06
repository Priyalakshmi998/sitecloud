import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from "../Actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    console.log("type", type);
    switch (type) {

        case LOGIN_SUCCESS:
            console.log("payloadRedux", state, payload);
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
            };

        case LOGIN_FAIL:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
            };
        default:
            return {
                ...state,
            };
    }
}
