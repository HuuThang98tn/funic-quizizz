import { StyleSheet, Text, View, Modal, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import colors from '@theme/colors/colors'
import { REQUIREIMG } from '@theme/require/RequireImage'
import { SCREEN_WIDTHSCREEN } from '@theme/size/sizeScree'
import TouchableOpacityCancel from '@components/button/TouchableOpacityCancel'
import TouchableOpacityConfirm from '@components/button/TouchableOpacityConfirm'

type Props = {
    showScoreModalTimer?: boolean
    restartQuizTimer?: () => void
    nextQuizTimer?: () => void
}

const ShowModalTimer = (props: Props) => {
    const { showScoreModalTimer, restartQuizTimer, nextQuizTimer } = props
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModalTimer}
            statusBarTranslucent={true}
        >
            <View style={styles.stylesViewContainer}>
                <ImageBackground
                    source={REQUIREIMG.ic_hs_25}
                    resizeMode='cover'
                    style={styles.stylesViewImageBackground}>
                    <ImageBackground
                        source={REQUIREIMG.ic_hs_16}
                        resizeMode='cover'
                        imageStyle={{ borderRadius: 6 }}
                        style={styles.stylesViewDialogResult}>
                        {/* <Image
                            source={score > (allQuestions?.length / 2) ? REQUIREIMG.ic_happy : REQUIREIMG.ic_sad}
                            style={{ width: 46, height: 46 }}
                            resizeMode="contain"
                        /> */}
                        <View style={styles.stylesViewTextResult}>
                            <Text style={{
                                fontSize: 30,
                                color: colors.colors_liner_gray_white,
                                fontWeight: "700",

                            }}>宿題のタイムアウト</Text>
                        </View>

                        {/* Option Quiz button */}
                        <View style={styles.stylesViewButton}>
                            <TouchableOpacity
                                onPress={restartQuizTimer}
                                style={styles.stylesTouchableOpacity}>
                                <Text style={styles.stylesText}>やり直す</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={nextQuizTimer}
                                style={styles.stylesTouchableOpacityCf}>
                                <Text
                                    numberOfLines={3}
                                    style={styles.stylesTextCf}>次へ</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </ImageBackground>
            </View>
        </Modal>
    )
}

export default ShowModalTimer

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
        backgroundColor: colors.colors_milky,
        width: SCREEN_WIDTHSCREEN - 20,
        paddingVertical: 20,
        marginHorizontal: 10,
        alignItems: 'center'
    },
    stylesViewTextResult: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 20
    },
    stylesViewButton: {
        flexDirection: "row",
        // justifyContent: "space-between",
        // width: "100%"
    },
    stylesTouchableOpacity: {
        backgroundColor: colors.colors_SandyBrown,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        paddingHorizontal: 32,
        width: "40%",
        marginHorizontal: 10
    },
    stylesText: {
        paddingVertical: 12,
        textAlign: 'center',
        color: colors.colors_teal,
        fontSize: 16,
        fontWeight: "700"
    },
    stylesTouchableOpacityCf: {
        backgroundColor: colors.colors_DarkSlateGray3,
        paddingHorizontal: 32,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        width: "40%",
        marginHorizontal: 10
    },
    stylesTextCf: {
        paddingVertical: 12,
        paddingHorizontal: 6,
        textAlign: 'center',
        color: colors.colors_teal,
        fontSize: 16,
        fontWeight: "700"
    }
})