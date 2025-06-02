import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ScreenName } from "../../constants/ScreenName";
import { SafeAreaView } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenName.Category)}
      >
        <Text style={{ color: "red", marginTop: 100 }}>Homrtyeryryrtye</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
