//Error Types

export const SET_LOADING = 'SET_LOADING';
export const SET_SOUND = 'SET_SOUND';
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_SUBCRIPTIONS = 'SET_SUBCRIPTIONS';
export const SET_PURCHASEHISTORY = 'SET_PURCHASEHISTORY';

//Action Props
export type ActionProps = {
    type: any;
    payload: any | void;
};

//Dispath Props
export type AllDispatchProps = (arg0: { type: any; payload: any | void }) => void;

