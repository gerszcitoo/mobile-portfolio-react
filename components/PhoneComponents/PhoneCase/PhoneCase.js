import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import PhoneCam from "../PhoneCam/PhoneCam";
import PhoneContainer from "../PhoneContainer/PhoneContainer";

export default function phoneCase() {
  return (
    <View style={styles.phoneContainer}>
      <ImageBackground
        source={require("../../../assets/iphone.png")}
        resizeMode="cover"
        style={styles.phone}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <PhoneCam></PhoneCam>
        <PhoneContainer></PhoneContainer>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  phoneContainer: {
    width: 290,
    aspectRatio: "9.75 / 19.5",
  },
  phone: {
    width: "100%",
    height: "100%",
    /* -webkit-filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.9));
  filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.9));
  font-family: roboto; */
    textAlign: "center",
    cursor: "default",
    //transform-style: preserve-3d;
    //perspective: 1000px;
    overflow: "scroll",
    //scrollbar-width: none;
  },
});
