import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import { Icon } from "../../constants/Icon";
import { Image } from "expo-image";
import { commonStyle, hp, wp } from "../../constants/commonStyle";
import { LinearGradient } from "expo-linear-gradient";

const Customize = () => {
  return (
    <SafeAreaView style={commonStyle.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={Icon.BackArrowIcon}
            style={styles.icon}
            contentFit="contain"
          />
        </TouchableOpacity>

        <View style={styles.centerContainer}>
          <Image
            source={Icon.showEyeIcon}
            style={styles.icon}
            contentFit="contain"
          />
        </View>
        <TouchableOpacity>
          <LinearGradient
            colors={["#FF6B6B", "#FFD93D"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.SaveContainer}
          >
            <Image
              source={Icon.shareIcon}
              style={{ width: wp(5), height: wp(5), marginRight: wp(1) }}
            />
            <Text style={styles.saveText}>Save</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Customize;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: hp(1),
    marginTop: wp(8),
    marginVertical: wp(2),
  },
  iconContainer: {
    padding: wp(3),
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    width: wp(8),
    height: wp(8),
  },
  SaveContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: hp(2),
    paddingVertical: hp(0.7),
    borderRadius: hp(2),
  },
  saveText: {
    fontSize: hp(2),
    color: "white",
    fontWeight: "bold",
    fontFamily: "Gilroy-SemiBold",
  },
});
