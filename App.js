import { NavigationContainer } from "@react-navigation/native";
import HomeRoutes from "./src/navigation/HomeRoutes";
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor="" />
      <NavigationContainer>
        <HomeRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
