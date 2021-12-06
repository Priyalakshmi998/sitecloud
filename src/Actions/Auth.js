import Axiosinstance from "../Modules/Auth/Api";
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,

} from "./types";


export const login = ({ email, password }) => async (
    dispatch
) => {

    const body = JSON.stringify({ email, password });
    try {

        const res = await Axiosinstance.post("/api", body);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        console.log("payload", res.data);
        return res;
    } catch (err) {
        console.log("Login Error", err);

        dispatch({
            type: LOGIN_FAIL,
        });
        throw err;
    }
};
