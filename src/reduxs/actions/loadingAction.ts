import { SET_LOADING } from "../types/types";

export const setIsLoading = (payload: any) => (dispatch: any) => {
    return dispatch({
        type: SET_LOADING,
        payload
    });
};
