import { Pressable, SafeAreaView, StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import { commonStyle, hp, wp } from "../../constants/commonStyle";
import { Image } from "expo-image";
import { Icon } from "../../constants/Icon";
import { FlashList } from "@shopify/flash-list";
import { ScreenName } from "../../constants/ScreenName";

const Category = ({ navigation }) => {
  const imageData = [
    Icon.sliderImage2,
    Icon.sliderImage2,
    Icon.sliderImage2,
    Icon.sliderImage2,
    Icon.sliderImage2,
    Icon.sliderImage2,
  ];

  // Create an array of false for each image
  const [likedStates, setLikedStates] = useState(
    Array(imageData.length).fill(false)
  );

  const toggleLike = (index) => {
    const updatedStates = [...likedStates];
    updatedStates[index] = !updatedStates[index];
    setLikedStates(updatedStates);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const renderImageCard = ({ item, index }) => (
    <Pressable
      onPress={() => {
        navigation.navigate(ScreenName.Preview, { index });
      }}
      style={{
        width: wp(44),
        height: hp(37),
        borderRadius: hp(1),
        marginHorizontal: wp(3),
        marginVertical: hp(1),
        overflow: "hidden",
      }}
    >
      <Image source={item} style={{ width: "100%", height: "100%" }} />
      <Pressable
        onPress={() => toggleLike(index)}
        style={{
          position: "absolute",
          right: hp(1),
          top: hp(1),
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: wp(1),
          borderRadius: hp(50),
          zIndex: 1,
        }}
      >
        <Image
          source={likedStates[index] ? Icon.LikeIcon2 : Icon.LikeIcon}
          contentFit="contain"
          style={{
            height: hp(2.5),
            width: hp(2.5),
            tintColor: likedStates[index] ? "red" : "white",
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
        }}
      >
        <Image
          source={Icon.showEyeIcon}
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
  );

  return (
    <SafeAreaView style={commonStyle.container}>
      <HeaderComponent title={"Category"} handleBack={handleBack} />
      <FlashList
        showsVerticalScrollIndicator={false}
        data={imageData}
        renderItem={renderImageCard}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        estimatedItemSize={200}
        contentContainerStyle={{ paddingBottom: hp(2), paddingTop: hp(2) }}
      />
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({});
