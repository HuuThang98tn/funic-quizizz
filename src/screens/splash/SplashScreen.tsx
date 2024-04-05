import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Animated } from 'react-native'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { SCREEN_HEIGHTSCREEN, SCREEN_WIDTHSCREEN } from '@theme/size/sizeScree';
import { slides } from '@data/DataFirst';
import { setIsLoading } from 'src/reduxs/actions/loadingAction';

type Props = {}


const Slide = ({ item }: any) => {
    return (
        <View style={{
            alignContent: 'center',
            flex: 1
        }}>
            <ImageBackground
                source={item.image}
                style={styles.image}
                resizeMode='cover'
            />
        </View>
    );
};

const SplashScreen = (props: Props) => {

    const dispatch: any = useDispatch();
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const animatedValue = useRef(new Animated.Value(0)).current;
    const silderRef: any = useRef(null);

    const vieableItemChanged: any = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const next = () => {
        if (currentIndex < slides.length - 1) {
            silderRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            dispatch(setIsLoading(true));
            // navigate(NameScreen.HOME);
        }
    };

    const skip = () => {
        silderRef.current.scrollToIndex({ index: slides.length - 1 });
    };

    const keyExtractor = (_: any, index: any) => index.toString();

    const PagingDot: FunctionComponent<{ color: any; width: any }> = ({
        color,

        width,
    }) => {
        return (
            <Animated.View
                style={[styles.indicator, { backgroundColor: color, width: width }]}
            />
        );
    };

    const Footer = () => {
        return (
            <View style={styles.content}>
                <TouchableOpacity style={styles.spaceMax} onPress={skip}>
                    <Text
                        style={[
                            styles.textDefault,
                            { color: "#fff", fontWeight: '900' },
                        ]}>
                        {currentIndex === slides.length - 1 ? null : '無視'}
                    </Text>
                </TouchableOpacity>
                <View style={styles.contentIndicator}>
                    {slides.map((_: any, index: any) => {
                        const inputRange = [
                            (index - 1) * SCREEN_WIDTHSCREEN,
                            index * SCREEN_WIDTHSCREEN,
                            (index + 1) * SCREEN_WIDTHSCREEN,
                        ];

                        const colorOutputRange = [
                            "#727070",
                            "#000",
                            "#727070",
                        ];

                        const color = animatedValue.interpolate({
                            inputRange,
                            outputRange: colorOutputRange,
                            extrapolate: 'clamp',
                        });
                        const width = animatedValue.interpolate({
                            inputRange,
                            outputRange: [10, 50, 10],
                            extrapolate: 'clamp',
                        });
                        const opacity = animatedValue.interpolate({
                            inputRange,
                            outputRange: [0.7, 1, 0.7],
                            extrapolate: 'clamp',
                        });
                        return (
                            <PagingDot
                                color={color}
                                // opacity={opacity}
                                width={width}
                                key={index.toString()}
                            />
                        );
                    })}
                </View>
                <TouchableOpacity
                    onPress={next}
                    style={[styles.spaceMax, { alignItems: 'flex-end' }]}>
                    <Text
                        style={[
                            styles.textDefault,
                            {
                                color:
                                    currentIndex === slides.length - 1
                                        ? "#000"
                                        : "#fff",

                                fontWeight: currentIndex === slides.length - 1 ? '700' : '700',
                            },
                        ]}>
                        {currentIndex === slides.length - 1 ? 'スタート' : '次へ'}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Animated.FlatList
                data={slides}
                horizontal
                pagingEnabled
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Slide item={item} />}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: animatedValue } } }],
                    { useNativeDriver: false },
                )}
                scrollEventThrottle={32}
                bounces={false}
                onViewableItemsChanged={vieableItemChanged}
                viewabilityConfig={viewConfig}
                ref={silderRef}
            />
            <Footer />

        </View>
    );
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: ArrayColors._color_white,
    },
    title: {
        // color: ArrayColors._color_black,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 60,
        fontFamily: 'OpenSans-Bold',
    },
    image: {
        // flex: 1,
        height: SCREEN_HEIGHTSCREEN,
        width: SCREEN_WIDTHSCREEN,
        // resizeMode: 'contain',
        // marginTop: 50
    },
    subtitle: {
        // color: ArrayColors._color_un_active,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 14,
        fontFamily: 'OpenSans-Regular',
    },
    textDefault: {
        fontSize: 22,
        fontFamily: 'OpenSans-Regular',
        fontWeight: "700"
    },
    indicator: {
        height: 10,
        marginHorizontal: 3,
        borderRadius: 10 / 2,
    },
    content: {
        flexDirection: 'row',
        padding: 22,
        justifyContent: 'space-around',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,

    },
    contentIndicator: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spaceMax: {
        width: 100,
    },
})