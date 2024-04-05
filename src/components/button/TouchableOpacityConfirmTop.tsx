import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import colors from '@theme/colors/colors'
import { SCREEN_WIDTHSCREEN } from '@theme/size/sizeScree'
import { REQUIREIMG } from '@theme/require/RequireImage'

type Props = {
    nextQuiz?: () => void
}

const TouchableOpacityConfirmTop = (props: Props) => {
    const { nextQuiz } = props
    return (
        <TouchableOpacity
            onPress={nextQuiz}>
            <ImageBackground
                source={REQUIREIMG._buttonTouchableConfirm}
                style={styles.stylesTouchableOpacity}>
                <Text
                    numberOfLines={1}
                    style={styles.stylesText}>はい</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default TouchableOpacityConfirmTop

const styles = StyleSheet.create({
    stylesTouchableOpacity: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 32,
        width: 130,
        height: 48,
        marginHorizontal: 10
    },
    stylesText: {
        paddingVertical: 12,
        paddingHorizontal: 6,
        textAlign: 'center',
        color: colors.colors_teal,
        fontSize: 16,
        fontWeight: "700"
    }
})