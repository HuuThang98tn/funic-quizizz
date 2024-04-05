import { SET_SOUND } from "../types/types";

export const setSound = (payload: any) => (dispatch: any) => {
    return dispatch({
        type: SET_SOUND,
        payload
    });
};
