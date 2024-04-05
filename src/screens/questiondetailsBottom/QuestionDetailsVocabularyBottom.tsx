import { View, ImageBackground } from 'react-native';
import React from 'react';
import { REQUIREIMG } from '@theme/require/RequireImage';
import { styles } from './styleqs';
import BodyQuestion from './components/BodyQuestion';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const QuestionDetailsVocabularyBottom = ({ props, route }: any) => {
    console.log(route.params.id);
    const navigation = useNavigation();
    const idQuestion = route.params
    console.log(route.params.id)

    return (
        <View style={styles.stylesContainer}>
            <ImageBackground
                source={REQUIREIMG.img_HS_10}
                style={styles.styleImgBGR}
                resizeMode="cover">
                <View style={{ flex: 1 }}>
                    <BodyQuestion
                        navigation={navigation}
                        idQuestion={idQuestion}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

export default QuestionDetailsVocabularyBottom;
