import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreens } from '@navigations/StackScreens';
import SplashScreen from '@screens/splash/SplashScreen';
import LoadingModal from '@components/modal/LoadingModal';
import Sound from 'react-native-sound';
import { useSelector, useDispatch } from 'react-redux';
// import { AppOpenAd, TestIds, AdEventType, InterstitialAd } from 'react-native-google-mobile-ads';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {}
const Stack = createNativeStackNavigator();
const LocalizationContext = (props: Props) => {
    const [isSplash, isLoading] = useState<boolean>(false);
    const isSplashLoad: any = useSelector((state: any) => state.isLoadingReducer);
    console.log(isSplashLoad.isSplashLoad);

    const SplashScreens = {
        Splash: SplashScreen,
    };
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {Object.entries({
                    ...(isSplashLoad.isloading === false && SplashScreens), ...StackScreens,
                }).map(([name, component]) => (
                    < Stack.Screen
                        name={name}
                        component={component}
                        key={name}
                        options={{ headerShown: false }}
                    />
                ))}
            </Stack.Navigator>
            <LoadingModal
                isLoading={isSplash}
            />
        </NavigationContainer>

    )
}

export default LocalizationContext

