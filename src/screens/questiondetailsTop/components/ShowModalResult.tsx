import { StyleSheet, Text, View, Modal, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import colors from '@theme/colors/colors'
import { REQUIREIMG } from '@theme/require/RequireImage'
import { SCREEN_WIDTHSCREEN } from '@theme/size/sizeScree'
import TouchableOpacityCancel from '@components/button/TouchableOpacityCancel'
import TouchableOpacityConfirm from '@components/button/TouchableOpacityConfirm'
import TouchableOpacityConfirmTop from '@components/button/TouchableOpacityConfirmTop'
import TouchableOpacityCancelTop from '@components/button/TouchableOpacityCancelTop'

type Props = {
    showScoreModal?: boolean
    score?: number | any | null
    allQuestions?: any | null
    restartQuiz?: () => void
    nextQuiz?: () => void
    checkNumberQuestion?: boolean | null
}

const ShowModalResult = (props: Props) => {
    const { showScoreModal, score, allQuestions, restartQuiz, nextQuiz, checkNumberQuestion } = props
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModal}
            statusBarTranslucent={true}
        >
            <View style={styles.stylesViewContainer}>
                <ImageBackground
                    source={REQUIREIMG.ic_hs_25}
                    resizeMode='cover'
                    style={styles.stylesViewImageBackground}>
                    <View
                        // source={REQUIREIMG.ic_hs_16}
                        // resizeMode='cover'
                        // imageStyle={{ borderRadius: 6 }}
                        style={styles.stylesViewDialogResult}>
                        <View style={styles.stylesViewTextResult}>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: "700",
                                color: colors.colors_liner_gray_white
                            }}>練習を終了しますか？</Text>

                        </View>

                        {/* Option Quiz button */}
                        <View style={styles.stylesViewButton}>
                            <TouchableOpacityCancelTop
                                restartQuiz={restartQuiz}
                            />
                            {checkNumberQuestion && (
                                <TouchableOpacityConfirmTop
                                    nextQuiz={nextQuiz}
                                />
                            )}
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </Modal>
    )
}

export default ShowModalResult

const styles = StyleSheet.create({
    stylesViewContainer: {
        flex: 1,
        backgroundColor: colors.colors_darkSlateGray,
        alignItems: 'center',
        justifyContent: 'center'
    },
    stylesViewImageBackground: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    stylesViewDialogResult: {
        backgroundColor: colors.colors_turquoise,
        width: SCREEN_WIDTHSCREEN - 20,
        paddingVertical: 20,
        marginHorizontal: 10,
        alignItems: 'center',
        borderRadius: 8
    },
    stylesViewTextResult: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 20
    },
    stylesViewButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        // width: "100%"
    }
})