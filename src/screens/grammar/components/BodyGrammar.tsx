import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import colors from '@theme/colors/colors';
import { REQUIREIMG } from '@theme/require/RequireImage';
import { SCREEN_WIDTHWINDOW } from '@theme/size/sizeScree';

type Props = {
    onPressStarOne?: () => void
    onPressStarTwo?: () => void;
    onPressStarThree?: () => void;

}

const BodyGrammar = (props: Props) => {
    const { onPressStarOne, onPressStarTwo, onPressStarThree } = props;
    return (
        <View style={styles.stylesContainer}>
            <Text style={styles.styleTitle}>JLPT N2</Text>
            <TouchableOpacity
                onPress={onPressStarOne}
                style={[styles.stylesButton, {}]}
            >
                <ImageBackground
                    source={REQUIREIMG._1sao_button}
                    style={styles.styleImg}
                    resizeMode='contain'
                >
                    <Text style={styles.styleTextButton}>文字</Text>
                </ImageBackground>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={onPressStarTwo}
                style={[styles.stylesButton, {}]}
            >
                <ImageBackground
                    source={REQUIREIMG._2sao_button}
                    style={styles.styleImg}
                    resizeMode='contain'
                >
                    <Text style={styles.styleTextButton}>語彙</Text>

                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onPressStarThree}
                style={[styles.stylesButton, {}]}
            >
                <ImageBackground
                    source={REQUIREIMG._3sao_button}
                    style={styles.styleImg}
                    resizeMode='contain' >
                    <Text style={styles.styleTextButton}>文法</Text>
                </ImageBackground>
            </TouchableOpacity>


        </View>
    )
}

export default BodyGrammar

const styles = StyleSheet.create({
    styleTitle: {
        fontWeight: "900",
        fontSize: 56,
        color: colors.colors_turquoise,
        marginBottom: 20
    },
    stylesContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 48
    },
    stylesButton: {
    },
    styleTextButton: {
        fontSize: 36,
        fontWeight: '700',
        color: colors.colors_black,
        lineHeight: 68
    },
    styleImg: {
        marginVertical: 12,
        width: SCREEN_WIDTHWINDOW / 1.5,
        height: 130,
        justifyContent: 'center',
        alignItems: "center"
    }
})