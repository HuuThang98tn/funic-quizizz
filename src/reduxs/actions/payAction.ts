import { SET_PAYMENT, SET_PURCHASEHISTORY, SET_SUBCRIPTIONS } from "../types/types";

export const setIsPay = (payload: any) => (dispatch: any) => {
    return dispatch({
        type: SET_PAYMENT,
        payload
    });
};

export const setIsSubscriptions = (payload: any) => (dispatch: any) => {
    return dispatch({
        type: SET_SUBCRIPTIONS,
        payload
    });
};


export const setIsPurchaseHistory = (payload: any) => (dispatch: any) => {
    return dispatch({
        type: SET_PURCHASEHISTORY,
        payload
    });
};



