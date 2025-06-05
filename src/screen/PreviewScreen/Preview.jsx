import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { commonStyle, hp, wp } from "../../constants/commonStyle";
import HeaderComponent from "../../components/HeaderComponent";
import { Icon } from "../../constants/Icon";
import CustomBtn from "../../components/CustomBtn";
import { Image } from "expo-image";

const Preview = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={commonStyle.container}>
      <HeaderComponent
        title={"Preview"}
        handleBack={handleBack}
        RightIcon={Icon.infoIcon}
        handleRightIconPress={() => {}}
      />
      <View
        style={{
          marginTop: hp(4),
          width: wp(82),
          height: hp(72),
          // borderWidth: 1,
          borderRadius: hp(2),
          alignSelf: "center",
          overflow: "hidden",
        }}
      >
        <View>
          <Image
            source={Icon.sliderImage2}
            contentFit="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <CustomBtn
        title={"Customize Template"}
        titleStyle={{ fontSize: hp(2), fontWeight: "600" }}
        onPressHandler={() => {}}
        isLoading={false}
        Customstyle={{ marginTop: hp(2) }}
      />
    </SafeAreaView>
  );
};

export default Preview;

const styles = StyleSheet.create({});
