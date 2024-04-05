import { StatusBar, BackHandler, Platform, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react'
import Toast from 'react-native-simple-toast';
import LocalizationContext from './contex/LocalizationContext';
import MyStatusBar from '@components/forms/MyStatusBar';
import store, { persistor } from './reduxs/index';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
// import mobileAds, { MaxAdContentRating } from 'react-native-google-mobile-ads';

type Props = {}
let backAction: any = null;

const App = (props: Props) => {
    // mobileAds()
    //     .setRequestConfiguration({
    //         // Update all future requests suitable for parental guidance
    //         maxAdContentRating: MaxAdContentRating.PG,
    //         // Indicates that you want your content treated as child-directed for purposes of COPPA.
    //         tagForChildDirectedTreatment: true,
    //         // Indicates that you want the ad request to be handled in a
    //         // manner suitable for users under the age of consent.
    //         tagForUnderAgeOfConsent: true,
    //         // An array of test device IDs to allow.
    //         testDeviceIdentifiers: ['EMULATOR'],
    //     })
    //     .then(() => {
    //         // Request config successfully set!
    //     });

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onBackHandle);

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onBackHandle);
        };
    })

    const onBackHandle = () => {
        if (backAction + 2000 > new Date().getTime()) {
            BackHandler.exitApp();
        }
        backAction = new Date().getTime();
        Toast.show('もう一度タップして終了する!', Toast.SHORT);
        return true;
    };
    return (
        <Provider {...{ store }}>
            <PersistGate loading={null} persistor={persistor}>
                <MyStatusBar />
                <LocalizationContext />
            </PersistGate>
        </Provider>
    )
}
export default App
