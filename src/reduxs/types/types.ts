//Error Types

export const SET_LOADING = 'SET_LOADING';
export const SET_SOUND = 'SET_SOUND';

//Action Props
export type ActionProps = {
    type: any;
    payload: any | void;
};

//Dispath Props
export type AllDispatchProps = (arg0: { type: any; payload: any | void }) => void;

