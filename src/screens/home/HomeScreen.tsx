import { View, ImageBackground, Platform, ScrollView, NativeModules, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styleHome';
import { REQUIREIMG } from '@theme/require/RequireImage';
import HeaderHome from './components/HeaderHome';
import TitleHome from './components/TitleHome';
import ButtonHome from './components/ButtonHome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setSound } from '../../reduxs/actions/soundActions';
import { SafeAreaView } from 'react-native-safe-area-context';

import RNIap, {
    AppOpenAd,
    TestIds,
    AdEventType,
    InterstitialAd,
} from 'react-native-google-mobile-ads';
import ModalSubscription from './components/ModalSubscription';
import { showMessage } from '@components/showMessage/showMessage';
import { constants } from '@utils/constants';
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
import { setIsPay } from 'src/reduxs/actions/payAction';
const { RNIapModule } = NativeModules;
export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
export const isPlay = isAndroid && !!RNIapModule;
const adUnitId = __DEV__
    ? TestIds.APP_OPEN
    : Platform.OS === 'android'
        ? 'ca-app-pub-4654653142461000/5038351832'
        : 'ca-app-pub-4654653142461000/7056915595';
type Props = {};
const errorLog = ({ message, error }: {
    message: string; error: unknown;
}) => { console.error('An error happened', message, error); };
const HomeScreen = (props: Props) => {
    const { connected,
        getSubscriptions,
        currentPurchase, finishTransaction,
        getPurchaseHistory, availablePurchases,
        getProducts, products,
    }: any = useIAP();
    const [isVisible, setIsVisible] = useState<boolean | any>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    // const [ownedSubscriptions, setOwnedSubscriptions] = useState<string[]>([]);
    // const [getSubscriptionsPackage, setgetSubscriptionsPackage] = useState<[]>([]);
    // const [getSubscriptionsPackageHistory, setgetSubscriptionsPackageHistory] = useState<[]>([]);
    // const [offerToken, setOfferToken] = useState<string | any>("");
    // const [product_id, setProduct_id] = useState<string | any>("");
    // const [isCheckData, setIsCheckData] = useState<boolean>(false);
    // const [purchaseHistoryID, setPurchaseHistoryID] = useState<any>(null);
    const [sound, setSounds] = useState<boolean | any>(true);
    const navigation: any = useNavigation();
    const dispatch = useDispatch();
    const onPressGrammar: any = () => navigation.navigate('GrammarScreen');
    const onPressVocabulary: any = () => navigation.navigate('VocabularyScreen');
    const isPayment: any = useSelector((state: any) => state.isPayReducer);
    // const isPayment: any = useSelector((state: any) => state.isPayReducer?.isPayment);

    // console.log("isPayment", isPayment?.isPayment);
    // console.log("isPayment", isPayment?.subscriptions);
    // console.log("purchaseHistory", isPayment?.purchaseHistory);


    // const stateText =
    //     (connected ? 'connected' : 'not connected');

    //     console.log("stateTextstateTextstateTextstateText",stateText);

    //Quảng cáo
    useEffect(() => {
        if (!isPayment?.isPayment) {
            setTimeout(() => {
                let interstitial = InterstitialAd.createForAdRequest(adUnitId, {
                    requestNonPersonalizedAdsOnly: true,
                    keywords: ['fashion', 'clothing'],
                });
                let interstitialListener: any = interstitial.addAdEventListener(
                    AdEventType.LOADED,
                    () => {
                        interstitial.show();
                    },
                );
                interstitial.load();
                return () => {
                    interstitialListener = null;
                };
            }, 2000);
        }


    }, []);

    //Bật tắt âm lượng
    const onPressSound = () => {
        setSounds(!sound);
        dispatch<any>(setSound(!sound));
    };

    useEffect(() => {
        getProductsCheck()

    }, [isPayment?.purchaseHistory, isPayment?.subscriptions]);


    const getProductsCheck = async () => {
        if (isPayment?.purchaseHistory.length === 0) {
            setIsVisible(true);
            dispatch<any>(setIsPay(false));

            console.log("Mảng rỗng");
        } else {
            isPayment?.purchaseHistory?.forEach((purchase: any) => {
                // Kiểm tra thời gian hết hạn của gói cước
                const expirationTime = new Date(purchase?.transactionDate);
                // Ngày giờ cụ thể
                const specificDate = new Date(expirationTime);
                // Ngày giờ hiện tại của hệ thống
                const currentDate = new Date();

                // Tính thời gian chênh lệch giữa ngày giờ cụ thể và ngày giờ hiện tại
                const timeDifference = currentDate.getTime() - specificDate.getTime();

                // Chuyển đổi thời gian chênh lệch từ mili giây sang ngày
                // const timeDifferenceInDays = timeDifference / (1000 * 60 * 60 * 24);
                const timeDifferenceInMonths = timeDifference / (1000 * 60 * 60 * 24 * 30); // Số mili giây trong một tháng

                // Kiểm tra xem thời gian chênh lệch có nhỏ hơn hoặc bằng 5 ngày không
                if (timeDifferenceInMonths <= 60) { //if (timeDifferenceInMonths <= 6) { 6 tháng
                    console.log('Thời gian chưa vượt quá 5 ngày');
                    setIsVisible(false);
                    dispatch<any>(setIsPay(true));

                    dispatch
                } else {
                    console.log('Thời gian đã vượt quá 5 ngày');
                    // handleGetProducts();
                    setIsVisible(true);
                    dispatch<any>(setIsPay(false));

                }
            });
        }
    }
    //1712471415685

    const handleBuySubscription = async (productId: string, offerToken?: string) => {
        if (!offerToken) {
            console.warn(`Không có Ưu đãi đăng ký nào cho sản phẩm đã chọn (Chỉ cần cho các giao dịch mua trên Google Play).: ${productId}`);
        } else {
            console.log(productId);

            try {
                await requestSubscription({
                    sku: productId,
                    ...(offerToken && {
                        subscriptionOffers: [{ sku: productId, offerToken }],
                    }),
                });
                setIsVisible(false);
                dispatch<any>(setIsPay(false));

            } catch (error) {
                if (error instanceof PurchaseError) {
                    console.log({ message: `[${error.code}]: ${error.message}`, error });
                } else {
                    console.log({ message: 'handleBuySubscription', error });
                }
                setIsVisible(true);
                dispatch<any>(setIsPay(false));
            }

        }
    }
    return (
        <SafeAreaView style={styles.styleContainer}>
            <ImageBackground
                source={REQUIREIMG.img_background}
                resizeMode="cover"
                style={styles.styleImgBGR}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.styleBody}>
                        <HeaderHome onPressSound={onPressSound} soundUnmute={sound} />

                        <View style={styles.styleTitleHome}>
                            <TitleHome />
                        </View>
                        <View style={styles.styleButton}>
                            <ButtonHome
                                onPressVocabulary={onPressVocabulary}
                                onPressGrammar={onPressGrammar}
                            />
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
            <ModalSubscription
                visible={isVisible}
                onRequestClose={() => setIsVisible(false)}
                onPressCheckBox={() => setIsChecked(!isChecked)}
                onRequestCloseDialog={() => setIsVisible(false)}
                isChecked={isChecked}
                getMoney={isPayment?.subscriptions}
                handleBuySubscription={(product_id: any, offerToken: any) => handleBuySubscription(product_id, offerToken)}
            />
        </SafeAreaView>
    );
};

export default withIAPContext(HomeScreen);
