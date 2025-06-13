// components/CategoryCard.js

import React from "react";
import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { hp, wp } from "../constants/commonStyle";

const CategoryCard = ({
  image,
  liked,
  onLikeToggle,
  onPress,
  viewCount = "0",
  downloadCount = "0",
  likeIcon,
  likedIcon,
  viewIcon,
  downloadIcon,
  // optional styles
  containerStyle = {},
  imageStyle = {},
  likeButtonStyle = {},
  likeIconStyle = {},
  footerStyle = {},
  footerTextStyle = {},
  footerIconStyle = {},
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: wp(44),
        height: hp(37),
        borderRadius: hp(1),
        marginHorizontal: wp(3),
        marginVertical: hp(1),
        overflow: "hidden",
        ...containerStyle,
      }}
    >
      <Image
        source={image}
        style={{
          width: "100%",
          height: "100%",
          ...imageStyle,
        }}
      />

      <Pressable
        onPress={onLikeToggle}
        style={{
          position: "absolute",
          right: hp(1),
          top: hp(1),
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: wp(1),
          borderRadius: hp(50),
          zIndex: 1,
          ...likeButtonStyle,
        }}
      >
        <Image
          source={liked ? likedIcon : likeIcon}
          contentFit="contain"
          style={{
            height: hp(2.5),
            width: hp(2.5),
            tintColor: liked ? "red" : "white",
            ...likeIconStyle,
          }}
        />
      </Pressable>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: wp(46),
          height: hp(2.5),
          backgroundColor: "rgba(0,0,0,0.5)",
          borderBottomLeftRadius: hp(1),
          borderBottomRightRadius: hp(1),
          flexDirection: "row",
          alignItems: "center",
          gap: wp(1),
          paddingHorizontal: wp(1),
          ...footerStyle,
        }}
      >
        <Image
          source={viewIcon}
          style={{
            height: hp(1.5),
            width: hp(1.5),
            tintColor: "white",
            ...footerIconStyle,
          }}
        />
        <Text style={{ color: "white", fontSize: hp(1.2), ...footerTextStyle }}>
          {viewCount}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={downloadIcon}
            contentFit="contain"
            style={{
              height: hp(1.5),
              width: hp(1.5),
              tintColor: "white",
              marginRight: wp(0.5),
              ...footerIconStyle,
            }}
          />
          <Text
            style={{ color: "white", fontSize: hp(1.2), ...footerTextStyle }}
          >
            {downloadCount}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CategoryCard;
