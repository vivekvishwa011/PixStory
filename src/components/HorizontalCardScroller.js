import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { hp, wp } from "../constants/commonStyle";
import { Icon } from "../constants/Icon";

const HorizontalCardScroller = ({ data = [], onPress }) => {
  const [likedStates, setLikedStates] = useState(data.map(() => false));

  const toggleLike = (index) => {
    const updatedStates = [...likedStates];
    updatedStates[index] = !updatedStates[index];
    setLikedStates(updatedStates);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: hp(2),
        gap: wp(3),
        marginTop: hp(1.5),
      }}
    >
      {data.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => onPress?.(item, index)}
          style={{
            width: wp(25.5),
            height: hp(21),
            borderRadius: hp(1),
          }}
        >
          <Image
            source={Icon.sliderImage}
            contentFit="contain"
            style={{
              width: wp(25.5),
              height: hp(21),
              borderRadius: hp(1),
            }}
          />

          {/* Like Icon Button */}
          <Pressable
            onPress={() => toggleLike(index)}
            style={{
              position: "absolute",
              right: hp(1),
              top: hp(1),
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: wp(1),
              borderRadius: hp(50),
              zIndex: 1, // important to make sure this is clickable over image
            }}
          >
            <Image
              source={[likedStates[index] ? Icon.LikeIcon2 : Icon.LikeIcon]}
              contentFit="contain"
              style={{
                height: hp(2.5),
                width: hp(2.5),
                tintColor: likedStates[index] ? "red" : "white",
              }}
            />
          </Pressable>

          {/* Bottom View with views/downloads */}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: wp(25.5),
              height: hp(2.5),
              backgroundColor: "rgba(0,0,0,0.5)",
              borderBottomLeftRadius: hp(1),
              borderBottomRightRadius: hp(1),
              flexDirection: "row",
              alignItems: "center",
              gap: wp(1),
              paddingHorizontal: wp(1),
            }}
          >
            <Image
              source={Icon.showEyeIcon}
              contentFit="contain"
              style={{
                height: hp(1.5),
                width: hp(1.5),
                tintColor: "white",
              }}
            />
            <Text style={{ color: "white", fontSize: hp(1.2) }}>289</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={Icon.downloadIcon}
                contentFit="contain"
                style={{
                  height: hp(1.5),
                  width: hp(1.5),
                  tintColor: "white",
                  marginRight: wp(0.5),
                }}
              />
              <Text style={{ color: "white", fontSize: hp(1.2) }}>200</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default HorizontalCardScroller;
