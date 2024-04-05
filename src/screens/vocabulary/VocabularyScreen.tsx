import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { styles } from './stylesVocabulary'
import { REQUIREIMG } from '@theme/require/RequireImage'
import FooterAppHeader from '@components/footer/FooterAppHeader'
import { SCREEN_WIDTHSCREEN, STATUS_BAR_HEIGHT } from '@theme/size/sizeScree'
import BodyVocabulary from './components/BodyVocabulary'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const VocabularyScreen = (props: Props) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const navigation = useNavigation()

    const onPressGoBack = () => {
        navigation.goBack();
    }
    const onPressNext = () => { }
    const onPressGoHome = () => {
        navigation.navigate("HomeScreen" as never)
    }
    return (
        <View style={styles.stylesContainer}>
            <ImageBackground
                source={REQUIREIMG.img_HS_10}
                style={styles.styleImgBGR}
                resizeMode='cover'
            >
                <View style={{
                    marginTop: STATUS_BAR_HEIGHT,
                    flexDirection: "row",
                    justifyContent: "flex-end"
                }}>
                    <Text style={styles.titleText}>JLPT N2</Text>
                </View>
                <View style={{
                    flex: 1,
                    marginBottom: 58
                }}>
                    <BodyVocabulary
                    />
                </View>
                <View style={{
                    width: 58,
                }}>
                    <FooterAppHeader
                        onPressGoBack={onPressGoBack}
                        onPressNext={onPressNext}
                        onPressGoHome={onPressGoHome}
                        isVisible={isVisible}
                    />
                </View>

            </ImageBackground>
        </View>
    )
}

export default VocabularyScreen
