import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SCREEN_WIDTHWINDOW } from '@theme/size/sizeScree'
import { REQUIREIMG } from '@theme/require/RequireImage'
import colors from '@theme/colors/colors'
type Props = {
    onPressGoBack?: () => void;
    onPressNext?: () => void;
    onPressGoHome?: () => void;
    isVisible?: boolean;
}

const FooterAppHeader = (props: Props) => {
    const { onPressGoBack, isVisible, onPressNext, onPressGoHome } = props
    return (
        <View style={styles.styleContainer}>
            <View style={styles.styleView}>
                <View style={styles.styleItemView}>
                    <TouchableOpacity
                        onPress={onPressGoBack}
                        style={styles.viewCustomStyle}
                    >
                        <Image
                            source={REQUIREIMG.img_hs_20}
                            resizeMode='contain'
                            style={styles.styleImg} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.viewCustomStyle}
                        onPress={onPressGoHome}
                    >
                        <Image
                            source={REQUIREIMG.img_home}
                            resizeMode='contain'
                            style={styles.styleImg} />
                    </TouchableOpacity>
                    {isVisible ? (
                        <TouchableOpacity
                            style={styles.viewCustomStyle}
                            onPress={onPressNext}
                        >
                            <Image
                                source={REQUIREIMG.img_hs_20_2}
                                resizeMode='contain'
                                style={styles.styleImg} />
                        </TouchableOpacity>
                    ) : (<View
                        style={styles.viewCustomStyle}
                    ></View>)}

                </View>
            </View>
        </View>
    )
}

export default FooterAppHeader

const styles = StyleSheet.create({
    styleContainer: {
        flex: 1
    },
    styleView: {
        width: SCREEN_WIDTHWINDOW,
        height: 58,
        backgroundColor: colors.colors_turquoise,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,

    },
    styleItemView: {
        // padding: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    styleImg: {
        width: 32,
        height: 32,

    },
    viewCustomStyle: {
        width: 68,
        height: 68,
        // backgroundColor: "red",
        padding: 16
    }
})