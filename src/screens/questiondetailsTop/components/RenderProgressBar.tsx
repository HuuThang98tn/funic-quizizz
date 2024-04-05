import { StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'
import colors from '@theme/colors/colors'

type Props = {
    progressAnim?: number | any
    currentQuestionIndex?: any
    allQuestions?: any
    currentNumber?: any
}

const RenderProgressBar = (props: Props) => {
    const { progressAnim, currentQuestionIndex, allQuestions, currentNumber } = props

    return (

        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,

        }}>
            <Text style={{
                fontSize: 22,
                color: colors.colors_orange,
                fontWeight: "700"
            }}
            >{` Lesson ${currentNumber === 1 ? "A" :
                currentNumber === 2 ? "B" :
                    currentNumber === 3 ? "C" :
                        currentNumber === 4 ? "D" :
                            currentNumber === 5 ? "E" :
                                currentNumber === 6 ? "F" :
                                    currentNumber === 7 ? "G" :
                                        currentNumber === 8 ? "H" :
                                            currentNumber === 9 ? "I" :
                                                currentNumber === 10 ? "J" :
                                                    currentNumber === 11 ? "K" :
                                                        currentNumber === 12 ? "L" :
                                                            currentNumber === 13 ? "M" :
                                                                currentNumber === 14 ? "N" :
                                                                    currentNumber === 15 ? "O" : null}`}</Text>
            <View style={{
                flex: 1,
                height: 16,
                borderRadius: 16,
                backgroundColor: colors.colors_Aquamarine1,
                marginHorizontal: 6

            }}>
                <Animated.View style={[{
                    height: 16,
                    borderRadius: 16,
                    backgroundColor: colors.colors_DarkSeaGreen2
                }, {
                    width: progressAnim
                }]}>

                </Animated.View>    

            </View>
            {/* Question Counter */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end'
            }}>
                <Text style={{
                    color: colors.colors_black,
                    fontSize: 18,
                    fontWeight: "700"
                }}>{currentQuestionIndex + 1}</Text>
                <Text style={{
                    color: colors.colors_black,
                    fontSize: 18,
                    fontWeight: "700"
                }}> / {allQuestions?.length}</Text>
            </View>
        </View>


    )
}

export default RenderProgressBar

const styles = StyleSheet.create({})