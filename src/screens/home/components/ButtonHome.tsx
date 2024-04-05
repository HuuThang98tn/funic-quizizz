import { StyleSheet, TouchableOpacity, View, Image, Text, ImageBackground } from 'react-native'
import React from 'react'
import { REQUIREIMG } from '@theme/require/RequireImage'
import { SCREEN_HEIGHTWINDOW, SCREEN_WIDTHWINDOW } from '@theme/size/sizeScree'
import colors from '@theme/colors/colors'

type Props = {
    onPressGrammar?: () => void;
    onPressVocabulary?: () => void;
}

const ButtonHome = (props: Props) => {
    const { onPressGrammar, onPressVocabulary } = props
    return (
        <View style={styles.styleContainer}>
            <View style={styles.styleViewColumn}>
                <TouchableOpacity
                    onPress={onPressGrammar}
                >
                    <ImageBackground
                        source={REQUIREIMG.button_top}
                        style={styles.styleButon_1}>
                        <Text style={styles.styleTextTitle}>
                            練習
                        </Text>
                        <Text style={styles.styleTextTitleDt}>
                            文字・語彙・文法の練習問題
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={onPressVocabulary}
                >
                    <ImageBackground
                        source={REQUIREIMG.button_bot}

                        style={styles.styleButon_2}>
                        <Text style={styles.styleTextTitle}>
                            テスト
                        </Text>
                        <Text style={styles.styleTextTitleDt}>
                            制限時間内に全ての問題に
                            答えよう
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ButtonHome

const styles = StyleSheet.create({
    styleContainer: {
        width: SCREEN_WIDTHWINDOW,
    },
    styleViewColumn: {
        padding: 16,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    styleButon_1: {
        width: SCREEN_WIDTHWINDOW / 1.5,
        height: 150,
        marginVertical: 24,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fbe097",
        borderRadius: 8,


    },
    styleButon_2: {
        width: SCREEN_WIDTHWINDOW / 1.5,
        height: 150,
        marginVertical: 24,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a8f7e5",
        borderRadius: 8
    },
    styleTextTitle: {
        textAlign: "center",
        fontSize: 42,
        color: colors.colors_black
    },
    styleTextTitleDt: {
        textAlign: "center",
        fontSize: 22,
        color: colors.colors_black,
        padding: 12,

    }
})