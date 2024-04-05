import { StyleSheet, ImageBackground, View, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import FooterAppHeader from '@components/footer/FooterAppHeader';
import BodyGrammar from './components/BodyGrammar';
import { useNavigation } from '@react-navigation/native'
import { REQUIREIMG } from '@theme/require/RequireImage';
import { SCREEN_HEIGHTSCREEN, SCREEN_WIDTHSCREEN } from '@theme/size/sizeScree';
// import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

type Props = {}

const GrammarScreen = (props: Props) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const navigation: any = useNavigation()
    // const adUnitId = __DEV__ ? TestIds.BANNER : Platform.OS === "android"
    //     ? "ca-app-pub-4654653142461000/7616413717" : "ca-app-pub-4654653142461000/2943026751";

    const onPressGoBack = () => {
        navigation.goBack();
    }
    const onPressNext = () => { }
    const onPressGoHome = () => {
        navigation.navigate("HomeScreen" as never)
    }

    const onPressStarScreen = (value: string) => {
        navigation.push("GrammarDetailsScreen", value)
    }
    return (
        <SafeAreaView style={styles.stylesContainer}>
            <ImageBackground
                source={REQUIREIMG.ic_hs_25}
                style={{
                    width: SCREEN_WIDTHSCREEN,
                    height: SCREEN_HEIGHTSCREEN,
                    flex: 1
                }}
                resizeMode='cover'
            >

                {/* <View style={{ height: 58, }}>
                    <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.FULL_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />
                </View> */}
                <ScrollView style={{ flex: 1, }}>
                    <View style={styles.styleBody}>
                        <BodyGrammar
                            onPressStarOne={() => onPressStarScreen("alphabet")}
                            onPressStarTwo={() => onPressStarScreen("vocabulary")}
                            onPressStarThree={() => onPressStarScreen("grammar")}
                        />
                    </View>

                </ScrollView>
                <View style={styles.styleFooter}>
                    <FooterAppHeader
                        onPressGoBack={onPressGoBack}
                        onPressNext={onPressNext}
                        onPressGoHome={onPressGoHome}
                        isVisible={isVisible}
                    />
                </View>
            </ImageBackground>

        </SafeAreaView>
    )
}

export default GrammarScreen

