import { StyleSheet } from "react-native";

import {
  heightPercentageToDP as hpD,
  widthPercentageToDP as wpD,
} from "react-native-responsive-screen";

import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export const hp = hpD;
export const wp = wpD;

export const commonStyle = StyleSheet.create({
  headingTxt: {
    marginVertical: moderateVerticalScale(10),
    fontSize: scale(18),
    fontFamily: "Gilroy-Bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
  },
  innerContainer: {
    paddingHorizontal: moderateScale(15),
    marginTop: verticalScale(8),
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallHeading: {
    marginVertical: moderateVerticalScale(10),
    fontSize: moderateScale(14),
    fontFamily: "Gilroy-Bold",
  },
});
