import { SET_PAYMENT, ActionProps, SET_SUBCRIPTIONS, SET_PURCHASEHISTORY } from "../types/types";
const initialState = {
    isPayment: false,
    subscriptions: [],
    purchaseHistory: [],
};


export default (state = initialState, { payload, type }: ActionProps) => {
    switch (type) {
        case SET_PAYMENT:
            return {
                ...state,
                isPayment: payload,
            };
        case SET_SUBCRIPTIONS:
            return {
                ...state,
                subscriptions: payload,
            };
        case SET_PURCHASEHISTORY:
            return {
                ...state,
                purchaseHistory: payload,
            };
        default:
            return state;
    }
}
