import {
  FlatList,
  Linking,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { commonStyle, hp, wp } from "../../constants/commonStyle";
import HeaderComponent from "../../components/HeaderComponent";
import { Image } from "expo-image";
import { Icon } from "../../constants/Icon";
import { ScreenName } from "../../constants/ScreenName";

const Data = [
  { id: "1", title: "Rate us on Googleplay", icon: Icon.starIcon },
  { id: "2", title: "More App", icon: Icon.plusIcon },
  { id: "3", title: "Contact Us", icon: Icon.contactUsIcon },
  { id: "4", title: "Privacy Policy", icon: Icon.shieldIcon },
  { id: "5", title: "Terms & Service", icon: Icon.bookIcon },
];

const Setting = ({ navigation }) => {
  const handleItemPress = (item) => {
    switch (item.title) {
      case "Contact Us":
        navigation.navigate(ScreenName.ContactUs);
        break;
      case "Privacy Policy":
        navigation.navigate(ScreenName.PrivacyPolicy);
        break;
      case "Terms & Service":
        navigation.navigate(ScreenName.TermsAndService);
        break;
      case "More App":
        Linking.openURL(
          "https://play.google.com/store/apps/details?id=your_app_id"
        );
        break;
      case "Rate us on Googleplay":
        Linking.openURL(
          "https://play.google.com/store/apps/details?id=your_app_id"
        );
        break;
      default:
        break;
    }
  };

  const renderItem = ({ item }) => (
    <Pressable style={styles.itemRow} onPress={() => handleItemPress(item)}>
      <View style={styles.itemLeft}>
        <Image source={item.icon} style={styles.iconStyle} />
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
      <View style={styles.arrowContainer}>
        <Image source={Icon.arrowIcon} style={styles.arrowIcon} />
      </View>
    </Pressable>
  );

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={commonStyle.container}>
      <HeaderComponent title={"Settings"} handleBack={handleBack} />
      <Pressable
        onPress={() => navigation.navigate(ScreenName.SubScription)}
        style={{
          marginTop: hp(2.5),
          borderRadius: hp(1),
          height: hp(11),
          marginHorizontal: hp(2),
          overflow: "hidden",
        }}
      >
        <Image
          source={Icon.sliderImage2}
          style={{ width: "100%", height: "100%" }}
        />
      </Pressable>

      <View
        style={{
          marginTop: hp(2),
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: hp(3),
        }}
      >
        <Pressable
          onPress={() => navigation.navigate(ScreenName.MyCreation)}
          style={{
            width: hp(20),
            height: hp(15),
            borderRadius: hp(2),
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={Icon.folderIcon}
            style={{
              width: wp(8),
              height: wp(8),
            }}
          />
          <View style={{ marginTop: hp(1) }}>
            <Text style={{ fontWeight: "500" }}>My Creation</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate(ScreenName.Myfavorite)}
          style={{
            width: hp(20),
            height: hp(15),
            borderRadius: hp(2),
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={Icon.favoriteIcon}
            contentFit="contain"
            style={{
              width: wp(8),
              height: wp(8),
            }}
          />
          <View style={{ marginTop: hp(1) }}>
            <Text style={{ fontWeight: "500" }}>My favorite</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.container}>
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>

      <View
        style={{
          position: "absolute",
          bottom: hp(2),
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: wp(4), fontWeight: "500" }}>Version 1.0</Text>
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(2),
    marginHorizontal: hp(2),
    backgroundColor: "white",
    borderRadius: hp(2),
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: hp(1),
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    width: wp(6.5),
    height: wp(6.5),
    resizeMode: "contain",
    marginRight: wp(4),
    tintColor: "#000",
  },
  titleText: {
    fontSize: wp(4),
    color: "#000",
  },
  arrowContainer: {
    width: hp(5),
    height: hp(5),
    borderRadius: hp(2.5),
    backgroundColor: "#E6EEF6",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowIcon: {
    width: wp(4.5),
    height: wp(4.5),
    resizeMode: "contain",
  },
  separator: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginHorizontal: hp(2),
  },
});
