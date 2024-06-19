import { StyleSheet, Text, View, ImageBackground } from "react-native";
import PhoneCase from "./components/PhoneComponents/PhoneCase/PhoneCase";

export default function App() {
  return (
    <View>
      <ImageBackground
        source={require("./assets/background.jpg")}
        resizeMode="cover"
        style={styles.container}
      >
        <PhoneCase />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100vh",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
