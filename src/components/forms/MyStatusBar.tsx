import React from 'react'
import { View, StatusBar, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const MyStatusBar = () => {
  return (
    <SafeAreaView style={styles.styleSafeAreaView}>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        barStyle={'dark-content'}
      />
    </SafeAreaView>
  );
}

export default MyStatusBar;
const styles = StyleSheet.create({
  styleSafeAreaView: {
    backgroundColor: "transparent",
  }
})

