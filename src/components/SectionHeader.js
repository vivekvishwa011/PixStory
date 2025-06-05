import React from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { hp, wp } from "../constants/commonStyle";
import { Icon } from "../constants/Icon";

const SectionHeader = ({
  title = "Title",
  onPress = () => {},
  containerStyle = {},
  leftContainerStyle = {},
  rightButtonStyle = {},
  titleTextStyle = {},
}) => {
  return (
    <View
      style={{
        marginHorizontal: hp(2),
        marginTop: hp(1),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        ...containerStyle,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: hp(2),
          alignItems: "center",
          ...leftContainerStyle,
        }}
      >
        <View
          style={{
            borderColor: "black",
            borderRadius: hp(50),
            padding: wp(1),
            backgroundColor: "white",
          }}
        >
          <Image
            source={Icon.latestIcon}
            style={{ height: hp(3), width: hp(3) }}
          />
        </View>
        <Text
          style={{
            fontSize: hp(2),
            fontWeight: "400",
            ...titleTextStyle,
          }}
        >
          {title}
        </Text>
      </View>
      <Pressable
        onPress={onPress}
        style={{
          paddingVertical: wp(1),
          paddingHorizontal: wp(2),
          borderRadius: hp(25),
          backgroundColor: "white",
          ...rightButtonStyle,
        }}
      >
        <Text style={{ fontWeight: "400" }}>See All</Text>
      </Pressable>
    </View>
  );
};

export default SectionHeader;
