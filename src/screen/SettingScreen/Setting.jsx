import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { commonStyle } from "../../constants/commonStyle";
import HeaderComponent from "../../components/HeaderComponent";

const Setting = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={commonStyle.container}>
      <HeaderComponent title={"Settings"} handleBack={handleBack} />
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({});
