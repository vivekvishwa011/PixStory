import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CustomBtn = ({
  title,
  loadingTitle = "Loading...",
  onPressHandler,
  isLoading,
  disabled,
  Customstyle,
  titleStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPressHandler}
      disabled={isLoading || disabled}
      style={[Customstyle, { borderRadius: 15, overflow: "hidden" }]}
    >
      <LinearGradient
        colors={["#FFAB0E", "#FF28DF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.main}
      >
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="white" />
            <Text style={styles.LoadingTitle}>{loadingTitle}</Text>
          </View>
        ) : (
          <Text className="font-gregular" style={[styles.BtnTitle, titleStyle]}>
            {title}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: hp(2),
    width: wp(80),
    alignSelf: "center",
  },
  BtnTitle: {
    color: "white",
    fontSize: hp(2),
    textAlign: "center",
  },
  LoadingTitle: {
    color: "white",
    marginLeft: hp(2),
    fontSize: hp(2),
  },
  loadingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomBtn;
