import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ScreenName } from "../../constants/ScreenName";
import { SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { Icon } from "../../constants/Icon";
import { commonStyle, hp, wp } from "../../constants/commonStyle";
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get("window").width;

const iconData = [
  { icon: Icon.NewPostIcon, label: "New Post" },
  { icon: Icon.SaveTheDateIcon, label: "Save The Date" },
  { icon: Icon.BirthDayIcon, label: "BirthDay" },
  { icon: Icon.MovieIcon, label: "Movie" },
  { icon: Icon.reelsIcon, label: "Reels" },
  { icon: Icon.SlideShowIcon, label: "Slide Show" },
];

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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: wp(2),
          marginTop: hp(6),
        }}
      >
        <View>
          <Image
            contentFit="contain"
            source={Icon.PixStoryIcon}
            style={{
              height: hp(3),
              width: hp(13),
            }}
          />
        </View>
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
                style={{
                  height: hp(2),
                  width: hp(2),
                }}
              />
            </Pressable>
            <Pressable onPress={() => {}}>
              <Image
                contentFit="contain"
                source={Icon.GoProIcon}
                style={{
                  height: hp(5),
                  width: hp(5),
                }}
              />
            </Pressable>
          </LinearGradient>

          <View
            style={{
              padding: hp(1),
              borderRadius: hp(50),
              backgroundColor: "white",
            }}
          >
            <Image
              contentFit="contain"
              source={Icon.settingIcon}
              style={{
                height: hp(3),
                width: hp(3),
              }}
            />
          </View>
        </View>
      </View>
      <View style={{ marginTop: hp(2), gap: hp(2) }}>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          {images.map((item, index) => (
            <Pressable
              onPress={() => {}}
              key={index.toString()}
              style={{
                width: screenWidth,
                borderRadius: hp(1),
              }}
            >
              <Image
                source={Icon.ScrollViewImages}
                contentFit="contain"
                style={{
                  height: hp(25),
                  width: wp(96),
                  alignSelf: "center",
                  borderRadius: hp(1),
                }}
              />
            </Pressable>
          ))}
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: hp(2),
            gap: hp(2),
          }}
          style={{
            paddingVertical: hp(1),
          }}
        >
          {iconData.map((item, index) => (
            <Pressable
              onPress={() => {
                navigation.navigate(ScreenName.Category);
              }}
              key={index}
              style={{ alignItems: "center" }}
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
                  style={{
                    height: hp(5),
                    width: hp(5),
                  }}
                />
              </View>
              <Text style={{ textAlign: "center" }}>{item.label}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <View
          style={{
            marginHorizontal: hp(2),
            marginTop: hp(1),
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: hp(2),
              alignItems: "center",
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
            <Text style={{ fontSize: hp(2), fontWeight: "400" }}>Latest</Text>
          </View>
          <Pressable
            onPress={() => {}}
            style={{
              paddingVertical: wp(1),
              paddingHorizontal: wp(2),
              borderRadius: hp(25),
              backgroundColor: "white",
            }}
          >
            <Text style={{ fontWeight: "400" }}>See All</Text>
          </Pressable>
        </View>

        <View
          style={{ marginHorizontal: hp(2), flexDirection: "row", gap: hp(2) }}
        >
          <View
            style={{
              width: wp(25.5),
              height: hp(21),
              borderRadius: hp(1),
              // backgroundColor: "white",
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
            <View
              style={{
                position: "absolute",
                right: hp(1),
                top: hp(1),
                backgroundColor: "white",
                padding: hp(2),
                borderRadius: hp(50),
              }}
            >
              <Image
                source={Icon.LikeIcon}
                style={{ height: hp(2), width: hp(2) }}
              />
            </View>
          </View>
          <View
            style={{
              width: wp(25.5),
              height: hp(21),
              borderRadius: hp(1),
              // backgroundColor: "white",
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
          </View>
          <View
            style={{
              width: wp(25.5),
              height: hp(21),
              borderRadius: hp(1),
              // backgroundColor: "white",
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
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
