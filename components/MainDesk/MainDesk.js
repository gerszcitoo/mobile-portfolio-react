import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MainDesk() {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/backgrounds/iosBackgroundDark.jpg")}
        resizeMode="cover"
        style={styles.desk}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  desk: {
    height: "94.6%",
    marginTop: 17,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 26,
    overflow: "scroll",
    //overscroll-behavior: contain;
    //box-sizing: border-box;
    position: "relative",
    zIndex: 2,
    color: "white",
  },
});
