import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import COLORS from "../constants/colors";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Books</Text>
      <Link href="/login">Login</Link>
      <Link href="/login">Signup</Link>

      <Image 
  source={require("../assets/images/Bookshop.png")}
    style={{ width: 300, height: 200 }}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});