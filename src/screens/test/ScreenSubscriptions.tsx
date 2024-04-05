import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, NativeModules, Platform } from 'react-native';
import {
    isIosStorekit2,
    PurchaseError,
    requestSubscription,
    useIAP,
    withIAPContext
} from 'react-native-iap';
import { Row } from './Row';
import { Button } from './Button';
import { SafeAreaView } from 'react-native-safe-area-context';
const { RNIapModule } = NativeModules;
export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

type Props = {}

const errorLog = ({ message, error }: {
    message: string; error: unknown;
}) => { console.error('An error happened', message, error) };

export const isPlay = isAndroid && !!RNIapModule;

const ScreenSubscriptions = (props: Props) => {
    const {
        connected,
        subscriptions,
        getSubscriptions,
        finishTransaction,
        currentPurchase,
    } = useIAP();

    const [ownedSubscriptions, setOwnedSubscriptions] = useState<string[]>([]);


    const handleGetSubscriptions = async () => {
        try {
            await getSubscriptions({ skus: ['does_not_contain_ads'] });
            console.log("subscriptions", subscriptions);

        } catch (error) {
            console.log("error", error);

            errorLog({ message: 'handleGetSubscriptions', error });
        }
    };



    const handleBuySubscription = async (
        productId: string,
        offerToken?: string,
    ) => {
        if (isPlay && !offerToken) {
            console.warn(
                `There are no subscription Offers for selected product (Only requiered for Google Play purchases): ${productId}`,
            );
        }
        try {
            await requestSubscription({
                sku: productId,
                ...(offerToken && {
                    subscriptionOffers: [{ sku: productId, offerToken }],
                }),
            });
        } catch (error) {
            if (error instanceof PurchaseError) {
                errorLog({ message: `[${error.code}]: ${error.message}`, error });
            } else {
                errorLog({ message: 'handleBuySubscription', error });
            }
        }
    };

    useEffect(() => {
        const checkCurrentPurchase = async () => {
            console.log('currentPurchasecurrentPurchasecurrentPurchase', currentPurchase);
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
        <SafeAreaView style={styles.container}>
            {subscriptions.map((subscription, index) => {
                const owned = ownedSubscriptions.find((pId) => {

                    return pId === subscription.productId;
                });
                console.log("ownedownedowned", owned);

                return (
                    <Row
                        key={subscription.productId}
                        fields={[
                            {
                                label: 'Subscription Id',
                                value: subscription.productId,
                            },
                            {
                                label: 'type',
                                value:
                                    'type' in subscription
                                        ? subscription.type
                                        : subscription.productType,
                            },
                        ]}
                        isLast={subscriptions.length - 1 === index}
                    >
                        {owned && <Text>Subscribed</Text>}
                        {!owned &&
                            isPlay &&
                            // On Google Play Billing V5 you might have  multiple offers for a single sku
                            'subscriptionOfferDetails' in subscription &&
                            subscription?.subscriptionOfferDetails?.map((offer) => (
                                <Button
                                    title={`Su1111bscribe ${offer.pricingPhases.pricingPhaseList
                                        .map((ppl) => ppl.billingPeriod)
                                        .join(',')}`}
                                    onPress={() => {
                                        handleBuySubscription(
                                            subscription.productId,
                                            offer.offerToken,
                                        );
                                    }}
                                />
                            ))}
                        {!owned && (isIos) && (
                            <Button
                                title="Subscribe"
                                onPress={() => {
                                    handleBuySubscription(subscription.productId);
                                }}
                            />
                        )}
                    </Row>
                );
            })}
            <Button
                title="Get the subscriptions"
                onPress={handleGetSubscriptions}
            />
        </SafeAreaView>
    )
}

export default withIAPContext(ScreenSubscriptions)

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flex: 1
    },
})