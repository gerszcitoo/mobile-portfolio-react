import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

export default function PhoneCam() {
  return (
    <View style={styles.backTest}>
      <ImageBackground
        source={require("../../../assets/iphone-cam.png")}
        resizeMode="contain"
        style={styles.phoneCam}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  phoneCam: {
    position: "absolute",
    resizeMode: "center",
    width: "148px",
    height: "100px",
    marginTop: "-26px",
    marginLeft: "71px",
    pointerEvents: "none",
    zIndex: 3,
  },
});
