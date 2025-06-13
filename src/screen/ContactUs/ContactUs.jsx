import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HeaderComponent from "../../components/HeaderComponent";
import { commonStyle } from "../../constants/commonStyle";

const ContactUs = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={commonStyle.container}>
      <HeaderComponent handleBack={handleBack} title={"Contact Us"} />
    </SafeAreaView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});
