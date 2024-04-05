import { Vibration, ToastAndroid } from 'react-native';

export const showMessage = (message: any) => {
    ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
    );
};
