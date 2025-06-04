import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ScreenName } from "../../constants/ScreenName";
import { SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { Icon } from "../../constants/Icon";
import { commonStyle, hp, wp } from "../../constants/commonStyle";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={commonStyle.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
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
              // alignSelf: "flex-start",
              // backgroundColor: "red",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: wp(2),
            // justifyContent: "flex-end",
            // alignItems: "flex-end",
          }}
        >
          <View>
            <Image
              contentFit="contain"
              source={Icon.GoProIcon}
              style={{
                height: hp(4),
                width: hp(10),
                // alignSelf: "flex-start",
                // backgroundColor: "red",
              }}
            />
          </View>
          <View>
            <Image
              contentFit="contain"
              source={Icon.settingIcon}
              style={{
                height: hp(3.5),
                width: hp(3.5),
                // alignSelf: "flex-start",
                // backgroundColor: "red",
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
