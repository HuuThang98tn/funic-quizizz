import { SCREEN_HEIGHTWINDOW, SCREEN_WIDTHSCREEN, SCREEN_WIDTHWINDOW, SCREEN_HEIGHTSCREEN, STATUS_BAR_HEIGHT } from '@theme/size/sizeScree';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    styleContainer: {
        flex: 1,
    },
    styleImgBGR: {
        width: SCREEN_WIDTHWINDOW,
        height: "100%"
    },
    styleBody: {
        marginTop: STATUS_BAR_HEIGHT,
        flex: 1
    },
    styleTitleHome: {
        flex: 2
    },
    styleButton: {
        flex: 9
    }
})