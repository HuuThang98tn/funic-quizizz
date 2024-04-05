import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { REQUIREIMG } from '@theme/require/RequireImage'
import { SCREEN_HEIGHTWINDOW, SCREEN_WIDTHWINDOW } from '@theme/size/sizeScree'

type Props = {
    soundUnmute?: boolean
    onPressSound?: () => void
    isVisibleLeft?: boolean
}

const HeaderHome = (props: Props) => {
    const { soundUnmute, onPressSound, isVisibleLeft } = props
    return (
        <View style={styles.styleContainer}>
            <View style={styles.styleViewRow}>
                {isVisibleLeft && (
                    <TouchableOpacity
                        style={styles.styleTouchableOpacityLeft}
                    >
                        <Image
                            source={REQUIREIMG.img_home}
                            resizeMode='cover'
                            style={styles.styleImg} />
                    </TouchableOpacity>
                )}
                <TouchableOpacity
                    onPress={onPressSound}
                    style={styles.styleTouchableOpacityRight}
                >
                    <Image
                        source={soundUnmute ? REQUIREIMG.img_soundUnmute : REQUIREIMG.img_soundMute}
                        resizeMode='cover'
                        style={styles.styleImg} />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default HeaderHome

const styles = StyleSheet.create({
    styleContainer: {
        width: SCREEN_WIDTHWINDOW,
    },
    styleViewRow: {
        padding: 16,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    styleImg: {
        width: 48,
        height: 48,
        alignSelf: "flex-end"

    },
    styleTouchableOpacityRight: {
    },
    styleTouchableOpacityLeft: {
    }
})