import { NavigationContainer } from "@react-navigation/native";
import HomeRoutes from "./src/navigation/HomeRoutes";
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" backgroundColor="" />
        <NavigationContainer>
          <BottomSheetModalProvider>
            <HomeRoutes />
          </BottomSheetModalProvider>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
