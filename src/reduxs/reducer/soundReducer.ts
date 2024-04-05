import { SET_SOUND, SET_LOADING, ActionProps } from "../types/types";
const initialState = {
    isSound: true,
};


export default (state = initialState, { payload, type }: ActionProps) => {
    switch (type) {
        case SET_SOUND:
            return {
                ...state,
                isSound: payload,
            };
        default:
            return state;
    }
}
