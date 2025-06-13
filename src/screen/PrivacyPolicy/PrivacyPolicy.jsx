import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { commonStyle } from "../../constants/commonStyle";
import HeaderComponent from "../../components/HeaderComponent";

const PrivacyPolicy = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={commonStyle.container}>
      <HeaderComponent handleBack={handleBack} title={"Privacy Policy"} />
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({});
