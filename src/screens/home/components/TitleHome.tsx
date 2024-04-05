import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '@theme/colors/colors'

type Props = {}

const TitleHome = (props: Props) => {
    return (
        <View style={styles.styleContainer}>
            <Text style={styles.styleText_H1}>JLPT N2</Text>
            {/* <Text style={styles.styleText_H4}>練習 テスト</Text> */}
        </View>
    )
}

export default TitleHome

const styles = StyleSheet.create({
    styleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    styleText_H1: {
        fontWeight: "900",
        fontSize: 68,
        color: colors.colors_milky,
        textAlign: "center",
        marginVertical: 3
    },
    styleText_H4: {
        fontWeight: "700",
        fontSize: 48,
        color: colors.colors_DarkSeaGreen2,
        textAlign: "center",
    }
})