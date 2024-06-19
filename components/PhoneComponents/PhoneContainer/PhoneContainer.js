import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainDesk from "../../MainDesk/MainDesk";

export default function PhoneContainer() {
  return (
    <View style={styles.container}>
      <MainDesk></MainDesk>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    height: "100%",
  },
});
