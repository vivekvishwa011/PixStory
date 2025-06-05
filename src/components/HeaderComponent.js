import { Image } from "expo-image";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "../constants/Icon";

const HeaderComponent = ({
  handleBack,
  title,
  handleRightIconPress,
  handleLeftIconPress,
  CustomTitleStyle,
  CustomStyle,
  RightIconStyle,
  RightIconCustomStyle,
  RightIcon,
  LeftIcon,
  LeftIconStyle,
  LeftIconCustomStyle,
  ShowLeftIcon = true,
  ShowRightIcon = true,
  RightIconText,
  rightExtraIcon,
  iosStyle = null,
}) => {
  const { bottom, left, right, top } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        CustomStyle,
        Platform.OS === "android" ? { paddingTop: top } : iosStyle,
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          handleLeftIconPress ? handleLeftIconPress() : handleBack()
        }
      >
        <View style={[styles.backIconContainer]}>
          <View style={[LeftIconCustomStyle]}>
            {ShowLeftIcon ? (
              LeftIcon ? (
                <Image
                  style={[styles.LeftIcon, LeftIconStyle]}
                  source={LeftIcon}
                  contentFit="contain"
                />
              ) : (
                <Image
                  style={styles.LeftIcon}
                  source={Icon.BackArrowIcon}
                  contentFit="contain"
                />
              )
            ) : (
              <View style={{ width: wp(8), height: wp(8) }} />
            )}
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          //   justifyContent: "flex-start",
          //   alignItems: "flex-start",
          marginLeft: wp(4),
        }}
      >
        <Text style={[styles.HeaderTitle, CustomTitleStyle]}>{title}</Text>
      </View>
      <View
        style={[{ flexDirection: "row", gap: wp(3) }, RightIconCustomStyle]}
      >
        <TouchableOpacity
          onPress={() => {
            handleRightIconPress();
          }}
          style={styles.filterAndSearch}
        >
          {ShowRightIcon ? (
            <Image
              style={[styles.RightIcon, RightIconStyle]}
              source={RightIcon}
              contentFit="contain"
            />
          ) : (
            <View style={{ width: wp(6), height: wp(6) }} />
          )}
          {/* {RightIconText && <Text>{RightIconText}</Text>} */}
        </TouchableOpacity>
        {rightExtraIcon && rightExtraIcon}
      </View>
    </View>
  );
};

export default HeaderComponent;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: hp(1),
    paddingHorizontal: hp(1),
    marginBottom: wp(2),
    marginVertical: wp(2),
  },
  backIconContainer: {
    paddingLeft: wp(3),
    alignSelf: "center",
  },
  LeftIcon: {
    width: wp(8),
    height: wp(8),
    alignSelf: "center",
  },
  RightIcon: {
    width: wp(6),
    height: wp(6),
    alignSelf: "center",
  },

  HeaderTitle: {
    fontSize: hp(2.3),
    // fontFamily: "Gilroy-Bold",
    fontWeight: "600",
  },

  filterAndSearch: {},
});
