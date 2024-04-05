import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import colors from '@theme/colors/colors'
import { REQUIREIMG } from '@theme/require/RequireImage'
import { SCREEN_WIDTHSCREEN } from '@theme/size/sizeScree'

type Props = {
    options?: any
    validateAnswer?: ((option: any) => void) | undefined
    isOptionsDisabled?: any
    correctOption?: any
    currentOptionSelected?: any
}
//allQuestions[currentQuestionIndex]?.options
const RenderOptions = (props: Props) => {

    const { options,
        validateAnswer,
        isOptionsDisabled,
        correctOption,
        currentOptionSelected }: any = props
    console.log("o====================ptions", options);
    console.log("correctOption", correctOption);

    return (
        <View>
            {
                options?.map((option: any, index: any) => (
                    <TouchableOpacity
                        onPress={() => validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={`lol${index}`}
                        style={{
                            borderWidth: 1,
                            borderColor: option == correctOption
                                ? colors.colors_DarkSlateGray
                                : option == currentOptionSelected
                                    ? colors.colors_orange
                                    : colors.colors_item,

                            backgroundColor: option == correctOption
                                ? colors.colors_DarkSlateGray
                                : option == currentOptionSelected
                                    ? colors.colors_orange
                                    : colors.colors_item,
                            // height: 58,
                            borderRadius: 3,
                            flexDirection: 'row',
                            alignItems: 'center',
                            // justifyContent: 'space-between',
                            paddingHorizontal: 3,
                            marginVertical: 10
                        }}
                    >
                        <View style={{
                            // flexDirection: "row",
                            // justifyContent: "center",
                            // alignItems: "center",
                            height: 48,
                            width: 48,
                        }}>
                            <View style={{
                                height: 48,
                                width: 48,
                                borderColor: colors.colors_skyblue,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 6,
                                borderWidth: 2,
                                paddingLeft: 3
                            }}>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 20,
                                    color: colors.colors_black,
                                    fontWeight: "700"
                                }}>{index + 1} </Text>
                            </View>

                        </View>
                        <View style={{
                            // height: 48,
                            width: SCREEN_WIDTHSCREEN - 68 * 2,
                            // backgroundColor: "red",
                            padding: 10
                        }}>
                            <Text
                                // numberOfLines={3}
                                style={{ fontSize: 16, color: colors.colors_black, }}>{option}</Text>
                        </View>

                        {/* Show Check Or Cross Icon based on correct answer*/}
                        {
                            option == correctOption ? (
                                <View style={{
                                    width: 48,
                                    height: 30, borderRadius: 30 / 2,
                                    position: "absolute",
                                    right: 0,

                                    // backgroundColor: colors.colors_darkSlateGray,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Image
                                        source={REQUIREIMG.ic_ring_correct}
                                        resizeMode='center'
                                        style={{
                                            width: 32,
                                            height: 32
                                        }} />
                                </View>
                            ) : option == currentOptionSelected ? (
                                <View style={{
                                        width: 48,
                                        height: 30, borderRadius: 30 / 2,
                                        position: "absolute",
                                        right: 0,
                                    // backgroundColor: colors.colors_orange,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                        <Image
                                            source={REQUIREIMG.ic_xwrong}
                                            resizeMode='center'
                                            style={{
                                                width: 32,
                                                height: 32
                                            }} />
                                </View>
                            ) : null
                        }

                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default RenderOptions

const styles = StyleSheet.create({})