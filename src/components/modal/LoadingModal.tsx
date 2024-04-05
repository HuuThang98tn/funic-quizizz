import React from 'react';
import { StyleSheet, ActivityIndicator, Modal, View } from 'react-native';


type Props = {
    isLoading?: boolean;
}
export default function LoadingModal(props: Props) {
    const { isLoading } = props;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isLoading}
            statusBarTranslucent>
            <View
                style={styles.styleContainerModal}>
                <ActivityIndicator
                    size="large"
                />
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    styleContainerModal: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.2)",
        justifyContent: "center",
        alignItems: "center"
    },
});
