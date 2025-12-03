import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Books</Text>
      <Image 
  source={{ uri: "https://images.unsplash.com/photo-1761746555964-54d189e38bfd?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
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
    color: "blue",
  },
});