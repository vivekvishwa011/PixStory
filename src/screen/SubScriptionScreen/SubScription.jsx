import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import { commonStyle } from "../../constants/commonStyle";

const SubScription = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={commonStyle.container}>
      <HeaderComponent handleBack={handleBack} title={"Subscription"} />
    </SafeAreaView>
  );
};

export default SubScription;

const styles = StyleSheet.create({});
