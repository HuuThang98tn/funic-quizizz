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
import {
    getAvailablePurchases,
    initConnection,
    endConnection,
    isIosStorekit2,
    PurchaseError,
    requestSubscription,
    useIAP,
    withIAPContext,
    requestPurchase,
    Sku,
} from 'react-native-iap';
import { setIsPurchaseHistory, setIsSubscriptions } from 'src/reduxs/actions/payAction';
import { constants } from '@utils/constants';
import { showMessage } from '@components/showMessage/showMessage';
type Props = {}
const Stack = createNativeStackNavigator();
const errorLog = ({ message, error }: {
    message: string; error: unknown;
}) => { console.error('An error happened', message, error); };
const LocalizationContext = (props: Props) => {
    const [isSplash, isLoading] = useState<boolean>(false);
    const isSplashLoad: any = useSelector((state: any) => state.isLoadingReducer);

    const SplashScreens = {
        Splash: withIAPContext(SplashScreen),
    };

    const dispatch = useDispatch();

    const { connected,
        subscriptions,
        getSubscriptions,
        currentPurchase, finishTransaction, purchaseHistory,
        getPurchaseHistory, availablePurchases,
        getProducts, products,

    }: any = useIAP();

    useEffect(() => {
        handlePurchaseHistory();
        handleGetProducts();

    }, []);
    
    useEffect(() => {
        dispatch<any>(setIsSubscriptions(subscriptions));

        dispatch<any>(setIsPurchaseHistory(purchaseHistory));

    }, [subscriptions, purchaseHistory]);

    const handlePurchaseHistory = async () => {
        try {
            await getPurchaseHistory();
        } catch (error) {
            errorLog({ message: 'Lấy lịch sử mua hàng thất bại', error });
        }
    }

    const handleGetProducts = async () => {
        try {
            await getSubscriptions({ skus: constants.subscriptionSkus });
            // setIsVisible(true);
        } catch (error) {
            showMessage(`Lấy gói cước thất bại ${error}`,);
            console.log(error);
        }
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

export default withIAPContext(LocalizationContext);

