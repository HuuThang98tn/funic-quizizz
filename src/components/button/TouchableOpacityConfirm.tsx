import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '@theme/colors/colors'
import { SCREEN_WIDTHSCREEN } from '@theme/size/sizeScree'
import { REQUIREIMG } from '@theme/require/RequireImage'

type Props = {
    nextQuiz?: () => void
}

const TouchableOpacityConfirm = (props: Props) => {
    const { nextQuiz } = props
    return (
        <TouchableOpacity
            onPress={nextQuiz}>
            <ImageBackground
                source={REQUIREIMG._buttonTouchableConfirm}
                style={styles.stylesTouchableOpacity}>
                <Text
                    numberOfLines={1}
                    style={styles.stylesText}>次へ</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default TouchableOpacityConfirm

const styles = StyleSheet.create({
    stylesTouchableOpacity: {
        // backgroundColor: colors.colors_SandyBrown,
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