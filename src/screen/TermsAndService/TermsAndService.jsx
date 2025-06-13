import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import { commonStyle } from "../../constants/commonStyle";

const TermsAndService = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={commonStyle.container}>
      <HeaderComponent title={"Terms & Service"} handleBack={handleBack} />
    </SafeAreaView>
  );
};

export default TermsAndService;

const styles = StyleSheet.create({});
