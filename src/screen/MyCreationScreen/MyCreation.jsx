import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { commonStyle, hp, wp } from "../../constants/commonStyle";
import HeaderComponent from "../../components/HeaderComponent";
import { FlashList } from "@shopify/flash-list";
import { Icon } from "../../constants/Icon";
import CategoryCard from "../../components/CategoryCard";

const MyCreation = ({ navigation }) => {
  const imageData = [
    {
      id: "1",
      image: Icon.sliderImage,
      viewCount: 289,
      downloadCount: 200,
    },
    {
      id: "2",
      image: Icon.sliderImage2,
      viewCount: 178,
      downloadCount: 145,
    },
    {
      id: "3",
      image: Icon.sliderImage,
      viewCount: 90,
      downloadCount: 34,
    },
    {
      id: "4",
      image: Icon.sliderImage2,
      viewCount: 402,
      downloadCount: 210,
    },
  ];

  const [likedStates, setLikedStates] = useState(
    Array(imageData.length).fill(false)
  );

  const toggleLike = (index) => {
    const updated = [...likedStates];
    updated[index] = !updated[index];
    setLikedStates(updated);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item, index }) => (
    <CategoryCard
      image={item.image}
      liked={likedStates[index]}
      onLikeToggle={() => toggleLike(index)}
      onPress={() => navigation.navigate(ScreenName.Preview, { index })}
      viewCount={item.viewCount.toString()}
      downloadCount={item.downloadCount.toString()}
      likeIcon={Icon.deleteIcon}
      likedIcon={Icon.deleteIcon}
      viewIcon={Icon.showEyeIcon}
      downloadIcon={Icon.downloadIcon}
    />
  );
  return (
    <SafeAreaView style={commonStyle.container}>
      <HeaderComponent handleBack={handleBack} title={"My Creation"} />
      <FlashList
        data={imageData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: hp(2),
          paddingTop: hp(2),
        }}
      />
    </SafeAreaView>
  );
};

export default MyCreation;

const styles = StyleSheet.create({});
