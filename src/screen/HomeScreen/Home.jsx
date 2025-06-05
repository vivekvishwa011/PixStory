import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ScreenName } from "../../constants/ScreenName";
import { SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { Icon } from "../../constants/Icon";
import { commonStyle, hp, wp } from "../../constants/commonStyle";
import { LinearGradient } from "expo-linear-gradient";
import HorizontalCardScroller from "../../components/HorizontalCardScroller";
import SectionHeader from "../../components/SectionHeader";

const screenWidth = Dimensions.get("window").width;

const iconData = [
  { icon: Icon.NewPostIcon, label: "New Post" },
  { icon: Icon.SaveTheDateIcon, label: "Save The Date" },
  { icon: Icon.BirthDayIcon, label: "BirthDay" },
  { icon: Icon.MovieIcon, label: "Movie" },
  { icon: Icon.reelsIcon, label: "Reels" },
  { icon: Icon.SlideShowIcon, label: "Slide Show" },
];

const dummyCardData = [1, 2, 3, 4, 5];

const Home = ({ navigation }) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [1, 2, 3];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      scrollRef.current?.scrollTo({
        x: screenWidth * nextIndex,
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <SafeAreaView style={commonStyle.container}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: wp(2),
          marginTop: hp(4.5),
          paddingVertical: hp(1),
        }}
      >
        <Image
          contentFit="contain"
          source={Icon.PixStoryIcon}
          style={{ height: hp(3), width: hp(13) }}
        />
        <View
          style={{
            flexDirection: "row",
            gap: wp(4),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LinearGradient
            style={{
              borderRadius: 10,
              width: wp(22),
              height: hp(4.5),
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
            colors={["#FFB800", "#FF7A00"]}
          >
            <Pressable onPress={() => {}}>
              <Image
                contentFit="contain"
                source={Icon.CrownIcon}
                style={{ height: hp(2), width: hp(2) }}
              />
            </Pressable>
            <Pressable onPress={() => {}}>
              <Image
                contentFit="contain"
                source={Icon.GoProIcon}
                style={{ height: hp(5), width: hp(5) }}
              />
            </Pressable>
          </LinearGradient>
          <Pressable
            onPress={() => navigation.navigate(ScreenName.Setting)}
            style={{
              padding: hp(1),
              borderRadius: hp(50),
              backgroundColor: "white",
            }}
          >
            <Image
              contentFit="contain"
              source={Icon.settingIcon}
              style={{ height: hp(3), width: hp(3) }}
            />
          </Pressable>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(4) }}
        stickyHeaderIndices={[1]}
      >
        {/* Auto Scroll Banner */}
        <View style={{ marginTop: hp(2), gap: hp(2) }}>
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
          >
            {images.map((_, index) => (
              <Pressable
                key={index.toString()}
                style={{
                  width: screenWidth,
                  borderRadius: hp(1),
                }}
                onPress={() => {}}
              >
                <Image
                  source={Icon.ScrollViewImages}
                  contentFit="contain"
                  style={{
                    height: hp(24),
                    width: wp(96),
                    alignSelf: "center",
                    borderRadius: hp(1),
                  }}
                />
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Sticky Category Bar */}
        <View
          style={{
            backgroundColor: "#ECECEC",
            paddingVertical: hp(2.5),
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: hp(2), gap: hp(2) }}
          >
            {iconData.map((item, index) => (
              <Pressable
                key={index}
                style={{ alignItems: "center" }}
                onPress={() => navigation.navigate(ScreenName.Category)}
              >
                <View
                  style={{
                    width: hp(7),
                    height: hp(7),
                    borderRadius: hp(50),
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: hp(0.5),
                  }}
                >
                  <Image
                    source={item.icon}
                    style={{ height: hp(5), width: hp(5) }}
                  />
                </View>
                <Text style={{ textAlign: "center" }}>{item.label}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Latest Sections */}
        <View>
          <SectionHeader
            title="Latest"
            onPress={() => navigation.navigate(ScreenName.Preview)}
          />
          <HorizontalCardScroller
            onPress={() => navigation.navigate(ScreenName.Preview)}
            data={dummyCardData}
          />
        </View>
        <View>
          <SectionHeader title="Latest" onPress={() => {}} />
          <HorizontalCardScroller data={dummyCardData} />
        </View>
        <View>
          <SectionHeader title="Latest" onPress={() => {}} />
          <HorizontalCardScroller data={dummyCardData} />
        </View>
        <View>
          <SectionHeader title="Latest" onPress={() => {}} />
          <HorizontalCardScroller data={dummyCardData} />
        </View>
        <View>
          <SectionHeader title="Latest" onPress={() => {}} />
          <HorizontalCardScroller data={dummyCardData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
