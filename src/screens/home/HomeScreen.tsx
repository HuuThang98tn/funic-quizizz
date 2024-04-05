import { View, ImageBackground, Platform, ScrollView, NativeModules } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styleHome';
import { REQUIREIMG } from '@theme/require/RequireImage';
import HeaderHome from './components/HeaderHome';
import TitleHome from './components/TitleHome';
import ButtonHome from './components/ButtonHome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setSound } from '../../reduxs/actions/soundActions';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    getAvailablePurchases,
    initConnection,
    endConnection,
    isIosStorekit2,
    PurchaseError,
    requestSubscription,
    useIAP,
    withIAPContext
} from 'react-native-iap';
import RNIap, {
    AppOpenAd,
    TestIds,
    AdEventType,
    InterstitialAd,
} from 'react-native-google-mobile-ads';
import ModalSubscription from './components/ModalSubscription';
import { showMessage } from '@components/showMessage/showMessage';
const { RNIapModule } = NativeModules;
export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
const errorLog = ({ message, error }: {
    message: string; error: unknown;
}) => { console.error('An error happened', message, error); };

export const isPlay = isAndroid && !!RNIapModule;
const adUnitId = __DEV__
    ? TestIds.APP_OPEN
    : Platform.OS === 'android'
        ? 'ca-app-pub-4654653142461000/5038351832'
        : 'ca-app-pub-4654653142461000/2943026751';
type Props = {};
const HomeScreen = (props: Props) => {
    const { connected,
        subscriptions,
        getSubscriptions,
        currentPurchase, finishTransaction, purchaseHistory,
        getPurchaseHistory, availablePurchases }: any = useIAP();
    const [sound, setSounds] = useState<boolean | any>(true);
    const [isVisible, setIsVisible] = useState<boolean | any>(false);
    const navigation: any = useNavigation();
    const dispatch = useDispatch();
    const onPressGrammar: any = () => navigation.navigate('GrammarScreen');
    const onPressVocabulary: any = () => navigation.navigate('VocabularyScreen');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [ownedSubscriptions, setOwnedSubscriptions] = useState<string[]>([]);
    const [getMoney, setGetMoney] = useState<String>();
    const [offerToken, setOfferToken] = useState<string | any>("");
    const [product_id, setProduct_id] = useState<string | any>("");
    const [isCheckData, setIsCheckData] = useState<boolean>(false);
    const [purchaseHistoryID, setPurchaseHistoryID] = useState<any>(null);

    //Quảng cáo
    // useEffect(() => {
    //     setTimeout(() => {
    //         let interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    //             requestNonPersonalizedAdsOnly: true,
    //             keywords: ['fashion', 'clothing'],
    //         });
    //         let interstitialListener: any = interstitial.addAdEventListener(
    //             AdEventType.LOADED,
    //             () => {
    //                 interstitial.show();
    //             },
    //         );
    //         interstitial.load();
    //         return () => {
    //             interstitialListener = null;
    //         };
    //     }, 2000);
    // }, []);

    //Bật tắt âm lượng
    const onPressSound = () => {
        setSounds(!sound);
        dispatch<any>(setSound(!sound));
    };

    //In-app
    // useEffect(() => {
    //     handleGetSubscriptions();
    // }, [isCheckData]);

    // useEffect(() => {
    //     checkPurchasedYearlyPackage();
    // }, [currentPurchase, finishTransaction]);

    // useEffect(function () {
    //     initConnection().then((res) => {
    //         setIsCheckData(true);
    //     }
    //     ).catch(error => console.log(error));

    //     return (() => {
    //         endConnection();
    //     });
    // }, []);


    // useEffect(() => {
    //     subscriptions?.map((subscription: any, index: any) => {
    //         setGetMoney(subscription?.subscriptionOfferDetails[0]?.pricingPhases?.pricingPhaseList[0]?.formattedPrice);
    //         setProduct_id(subscriptions[0]?.productId);

    //         purchaseHistory.map((item: any, index: any) => {
    //             // setPurchaseHistoryID(item.productId);
    //             const check_ID = purchaseHistory?.includes(item.productId);
    //             if (check_ID) {
    //                 setIsVisible(false);
    //                 console.log("false");
    //             } else {
    //                 setIsVisible(true);
    //                 console.log("true");
    //             }
    //             if (!check_ID && isPlay && 'subscriptionOfferDetails' in subscription) {
    //                 subscription?.subscriptionOfferDetails?.map((offer: any) => {
    //                     setOfferToken(offer?.offerToken);
    //                 });
    //             }
    //         });
    //     });

    // }, [subscriptions]);

    purchaseHistory.map((item: any, index: any) => {

        console.log("item.productId", item.productId);

    });

    const checkPurchasedYearlyPackage = async () => {
        try {
            await getPurchaseHistory();
            // Lấy lịch sử mua hàng
            // const purchaseHistory = await getPurchaseHistory();

            // // Xác định xem có giao dịch mua gói cước 1 năm hay không
            // const yearlyPackageProductId = 'does_not_contain_ads'; // Thay bằng mã sản phẩm của gói cước 1 năm
            // const hasPurchasedYearlyPackage = purchaseHistory.some(
            //     (purchase: any) => purchase.productId === yearlyPackageProductId
            // );

            // // setPurchasedYearlyPackage(hasPurchasedYearlyPackage);
            // console.log("hasPurchasedYearlyPackage", hasPurchasedYearlyPackage);

        } catch (error) {
            console.log('Error while fetching purchase history:', error);
        }
    };

    // console.log("purchaseHistorypurchaseHistory=>>", purchaseHistory);


    const handleGetSubscriptions = async () => {
        setTimeout(async () => {
            try {
                await getSubscriptions({ skus: ['does_not_contain_ads'] });
                // setIsCheckData(true)
            } catch (error) {
                showMessage(`Lấy gói cước thất bại ${error}`,);
                console.log(error);
                // setIsCheckData(false)

                // E_NOT_PREPARED Not initialized, Please call initConnection()

            }
        }, 3000);

    };

    const handleBuySubscription = async (
        productId: string,
        offerToken?: string,
    ) => {
        setIsVisible(false);
        try {
            if (isPlay && !offerToken) {
                console.warn(
                    `Không có Ưu đãi đăng ký cho sản phẩm đã chọn (Chỉ bắt buộc đối với các giao dịch mua trên Google Play): ${productId}`,
                );
            }
            await requestSubscription({
                sku: productId,
                ...(offerToken && {
                    subscriptionOffers: [{ sku: productId, offerToken }],
                }),
            });
        } catch (error) {
            setIsVisible(true);
            if (error instanceof PurchaseError) {
                errorLog({ message: `[${error.code}]: ${error.message}`, error });
                // showMessage(error)
            } else {
                errorLog({ message: 'handleBuySubscription', error });
                // showMessage(error)
            }
        }
    };

    useEffect(() => {
        const checkCurrentPurchase = async () => {
            try {
                if (currentPurchase?.productId) {
                    await finishTransaction({
                        purchase: currentPurchase,
                        isConsumable: true,
                    });

                    setOwnedSubscriptions((prev) => [
                        ...prev,
                        currentPurchase?.productId,
                    ]);
                }
            } catch (error) {
                if (error instanceof PurchaseError) {
                    errorLog({ message: `[${error.code}]: ${error.message}`, error });
                } else {
                    errorLog({ message: 'handleBuyProduct', error });
                }
            }
        };

        checkCurrentPurchase();
    }, [currentPurchase, finishTransaction]);

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
                getMoney={getMoney}
                onPressPay={() => handleBuySubscription(product_id, offerToken)}
                onPressTest={() => handleGetSubscriptions}
            />


        </SafeAreaView>
    );
};

export default withIAPContext(HomeScreen);
