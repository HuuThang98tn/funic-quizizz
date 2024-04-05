import { StyleSheet, Text, View, Modal, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { SCREEN_HEIGHTSCREEN, SCREEN_WIDTHSCREEN } from '@theme/size/sizeScree';
import { REQUIREIMG } from '@theme/require/RequireImage';
import colors from '@theme/colors/colors';

interface Props {
    visible?: boolean;
    onRequestClose?: () => void | undefined | any;
    isChecked?: boolean | any;
    onPressCheckBox?: () => void | undefined | any;
    onRequestCloseDialog?: () => void | undefined | any;
    getMoney?: string | any | undefined;
    handleGetSubscriptions?: () => void | undefined | any;
    onPressPay?: () => void | undefined | any;
    onPressTest?: () => void | undefined | any;



}
interface State { }

const ModalSubscription = (props: Props) => {
    const { visible,
        onRequestClose,
        isChecked,
        onPressCheckBox,
        onRequestCloseDialog,
        getMoney,
        onPressPay,
        handleGetSubscriptions,
        onPressTest } = props;
    console.log("getMoney", getMoney);

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onRequestClose}
            hardwareAccelerated={true}
            statusBarTranslucent>
            <View
                style={{
                    flex: 1,
                    width: SCREEN_WIDTHSCREEN,
                    backgroundColor: 'rgba(52, 52, 52, 0.8)',
                    height: SCREEN_HEIGHTSCREEN,
                    justifyContent: 'center',
                }}>
                <View
                    style={{
                        paddingHorizontal: 10,
                        backgroundColor: '#fff',
                        height: '35%',
                        marginHorizontal: 20,
                        borderRadius: 6,
                    }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={onRequestCloseDialog}
                        style={{ position: "absolute", right: 5, top: 5, padding: 10 }}>
                        <Image
                            source={REQUIREIMG.src_assets_imgs_ic_xwrong_gr}
                            style={{
                                width: 18,
                                height: 18,
                            }}
                        />
                    </TouchableOpacity>
                    {/* <Text style={styles.styleTitle_1}>Full App (JLPT N2)</Text> */}
                    <Text style={styles.styleTitle_1}>広告無しのアプリを楽しもう</Text>
                    <Text style={styles.styleTitle_3}>{getMoney}</Text>
                    <ImageBackground
                        source={REQUIREIMG.in_app_button}
                        style={{
                            width: SCREEN_WIDTHSCREEN - 60,
                            height: 48,
                            justifyContent: "center",
                            alignItems: 'center',
                            position: "absolute",
                            bottom: 58,
                            left: 10,
                            right: 10,
                        }}>
                        <Text
                            onPress={onPressPay}
                            style={styles.stylePay}>購入</Text>
                    </ImageBackground>
                    {/* <TouchableOpacity
                        onPress={onPressTest}
                        style={{ backgroundColor: 'red', width: 100, height: 100 }}>
                        <Text>PayMan</Text>

                    </TouchableOpacity> */}
                    <View style={styles.styleCheckBox}>
                        <TouchableOpacity
                            onPress={onPressCheckBox}
                            style={styles.styleCheckBoxCustom}>
                            {
                                isChecked && <Image
                                    source={REQUIREIMG.check_ic}
                                    style={{
                                        width: 18,
                                        height: 18,
                                    }}
                                />
                            }

                        </TouchableOpacity>
                        <Text style={styles.styleTitle_4}>今後表示しない</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalSubscription;

const styles = StyleSheet.create({
    styleTitle_1: {
        fontSize: 24,
        marginVertical: 10,
        justifyContent: "center",
        textAlign: 'center',
        marginTop: 48
    },
    styleTitle_2: {
        fontSize: 18,
        marginVertical: 10,
        justifyContent: "center",
        textAlign: 'center'
    },
    styleTitle_3: {
        fontSize: 32,
        marginBottom: 10,
        justifyContent: "center",
        textAlign: 'center',
        fontWeight: "700"
    },
    styleTitle_4: {
        fontSize: 16,
        fontWeight: "700",
        marginHorizontal: 12
    },
    stylePay: {
        fontSize: 24,
        color: colors.colors_whileGray,
        fontWeight: "700",
        width: "100%",
        height: "100%",
        textAlign: "center",
        paddingVertical: 6
    },
    styleCheckBox: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        justifyContent: "center",
        position: "absolute",
        bottom: 5,
        alignSelf: "center"
    },
    styleCheckBoxCustom: {
        borderWidth: .5,
        borderColor: colors.colors_black,
        borderRadius: 6,
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: 'center'
    }
});
