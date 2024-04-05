import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '@theme/colors/colors'

type Props = {
    showNextButton?: boolean | any,
    handleNext?: () => void

}

const RenderNextButton = (props: Props) => {
    const { showNextButton, handleNext } = props
    if (showNextButton) {
        return (
            <TouchableOpacity
                onPress={handleNext}
                style={{
                    marginTop: 20, width: '100%', backgroundColor: colors.colors_orange, padding: 16, borderRadius: 5
                }}>
                <Text style={{
                    fontSize: 20,
                    color: colors.colors_milky,
                    textAlign: 'center', fontWeight: "700"
                }}>次の文</Text>
            </TouchableOpacity>
        )
    } else {
        return null
    }
}

export default RenderNextButton

const styles = StyleSheet.create({})