import { NavigationContainer } from "@react-navigation/native";
import HomeRoutes from "./src/navigation/HomeRoutes";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" backgroundColor="" />
      <NavigationContainer>
        <HomeRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
