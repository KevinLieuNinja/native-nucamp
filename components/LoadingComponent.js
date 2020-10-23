import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

function Loading() {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size="large" color="#5637dd" />
      <Text style={styles.loadingText}>Wait Foo . . .</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  loadingText: {
    color: "#5637DD",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Loading;
