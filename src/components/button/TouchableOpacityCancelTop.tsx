import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import colors from '@theme/colors/colors'
import { SCREEN_HEIGHTWINDOW, SCREEN_WIDTHSCREEN } from '@theme/size/sizeScree'
import { REQUIREIMG } from '@theme/require/RequireImage'

type Props = {
    restartQuiz?: () => void
}

const TouchableOpacityCancelTop = (props: Props) => {
    const { restartQuiz } = props
    return (
        <TouchableOpacity
            onPress={restartQuiz}
        >
            <ImageBackground
                source={REQUIREIMG._buttonTouchableCancel}
                style={styles.stylesTouchableOpacity}
            >
                <Text style={styles.stylesText}>いいえ</Text>

            </ImageBackground>
        </TouchableOpacity>
    )
}

export default TouchableOpacityCancelTop

const styles = StyleSheet.create({
    stylesTouchableOpacity: {
        // backgroundColor: colors.colors_SandyBrown,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        paddingHorizontal: 32,
        width: 130,
        height: 48,
        marginHorizontal: 10
    },
    stylesText: {
        paddingVertical: 12,
        textAlign: 'center',
        color: colors.colors_teal,
        fontSize: 16,
        fontWeight: "700"
    }
})