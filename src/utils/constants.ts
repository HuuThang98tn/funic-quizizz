import { Platform } from 'react-native';


const productSkus = Platform.select({
    ios: ['com.cooni.point1000', 'com.cooni.point5000'],

    android: [
        "id_remove_ads_month"
    ],
    default: [],
}) as string[];

const subscriptionSkus = Platform.select({
    ios: ['com.cooni.sub1000'],
    // android: isAmazon
    //   ? [
    //       'com.amazon.sample.iap.subscription.mymagazine.month',
    //       'com.amazon.sample.iap.subscription.mymagazine.quarter',
    //     ]
    //   : ['test.sub1'],
    android: [ "weekly_subscription_funic"],
    // 'id_remove_ads_month',
    default: [],
}) as string[];
const amazonBaseSku = 'com.amazon.sample.iap.subscription.mymagazine';
export const constants = {
    productSkus,
    subscriptionSkus,
    amazonBaseSku,
};
