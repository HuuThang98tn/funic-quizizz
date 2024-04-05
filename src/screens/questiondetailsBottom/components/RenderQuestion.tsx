import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '@theme/colors/colors'

type Props = {
    question?: any
}
//{allQuestions[currentQuestionIndex]?.question}
const RenderQuestion = (props: Props) => {
    const { question } = props;
    console.log("question", question);


    return (
        <View style={styles.styleViewQuestion}>
            {/* Question */}
            <Text style={styles.styleTextQuestion}>{question}</Text>
        </View>
    )
}

export default RenderQuestion

const styles = StyleSheet.create({
    styleViewQuestion: {
        marginVertical: 10,
        borderWidth: 1,
        padding: 24,
        borderColor: colors.colors_orange,
        borderRadius: 8,
        backgroundColor: colors.colors_milky

    },
    styleTextQuestion: {
        color: colors.colors_black,
        fontSize: 22,
        fontWeight: "600"
    }
})