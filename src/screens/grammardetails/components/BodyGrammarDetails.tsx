import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import DataAlphabet from '@data/DataAlphabet'
import { SCREEN_HEIGHTSCREEN, SCREEN_WIDTHSCREEN } from '@theme/size/sizeScree'
import colors from '@theme/colors/colors'
import { useNavigation } from '@react-navigation/native';
import DataVocabulary from '@data/DataVocabulary'
import DataGrammar from '@data/DataGrammar'

type Props = {
    onPressQuestionDetails?: ((item: any) => void) | any | undefined;
    valueParams?: any | undefined | null
}

const BodyGrammarDetails = (props: Props) => {
    const { valueParams } = props
    const navigation: any = useNavigation();

    const onPressQuestionDetails = (item: any) => {
        navigation.navigate("QuestionDetailsVocabularyTop", item)

    }
    const renderItem = (item: {} | any, index: number) => {
        console.log(index % 3);

        let backgroundColor = '';
        switch (index % 3) {
            case 0:
                backgroundColor = colors.colors_DarkSlateGray;
                break;
            case 1:
                backgroundColor = colors.colors_DarkSeaGreen2;
                break;
            case 2:
                backgroundColor = colors.colors_SandyBrown;
                break;
            default:
                break;
        }
        return (
            <TouchableOpacity
                onPress={() => {
                    onPressQuestionDetails(item)
                }}
                key={item.id}
                style={[styles.styleItemContainer, { backgroundColor: backgroundColor }]}>
                {/* <Text style={styles.styleLesson}>{item.title}</Text> */}
                <Text style={styles.styleNumber}>{item.option}</Text>
            </TouchableOpacity>

        )

    }
    return (

        <View style={styles.styleContainer}>
            <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
            >
                <FlatList
                    data={valueParams === "alphabet" ? DataAlphabet :
                        valueParams === "vocabulary" ? DataVocabulary :
                            valueParams === "grammar" ? DataGrammar : null
                    }
                    renderItem={({ item, index }: any) => renderItem(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={3}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </ScrollView>

        </View>
    )
}

export default BodyGrammarDetails

const styles = StyleSheet.create({
    styleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        width: SCREEN_WIDTHSCREEN
        // backgroundColor: "red"
    },
    styleItemContainer: {
        width: 80,
        height: 80,
        marginHorizontal: 18,
        marginVertical: 18,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: 'center'

    },
    styleLesson: {
        fontSize: 22,
        color: colors.colors_milky,
        fontWeight: "700"
    },
    styleNumber: {
        fontSize: 32,
        color: colors.colors_milky,
        fontWeight: "700"
    }
})