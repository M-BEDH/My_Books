import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import COLORS from "../constants/colors";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Books</Text>

      <Link style={styles.link} href="/auth">Connexion </Link>
      <Link style={styles.link} href="/auth/signup">Inscription</Link>

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
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  link: {
    fontSize: 18,
    color: COLORS.textPrimary,
    marginVertical: 8,
    backgroundColor: COLORS.background,
    padding: 10,
    borderRadius: 10,
  },
});