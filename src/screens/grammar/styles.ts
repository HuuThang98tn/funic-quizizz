import colors from '@theme/colors/colors';
import { STATUS_BAR_HEIGHT } from '@theme/size/sizeScree';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    stylesContainer: {
        flex: 1,
    },
    styleBody: {
        // flex: 14,
        alignItems: "center",
        paddingBottom: 52 
    },
    styleFooter: {
        backgroundColor: colors.colors_milky,
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0
    }
})