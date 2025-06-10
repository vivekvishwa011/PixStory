import React, { useRef, useMemo, useCallback, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { Icon } from "../../constants/Icon";
import { commonStyle, hp, wp } from "../../constants/commonStyle";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Customize = ({ navigation }) => {
  const [bottomViewDetailsHeight, setBottomViewDetailsHeight] = useState(1);
  const [bottomViewMusicHeight, setBottomViewMusicHeight] = useState(1);
  const [bottomViewCloseHeight, setBottomViewCloseHeight] = useState(1);

  const detailsRef = useRef(null);
  const musicRef = useRef(null);
  const CloseBtnRef = useRef(null);

  const handleSheetChanges = useCallback((index) => {
    console.log("Bottom sheet index:", index);
  }, []);

  const handleChangeImage = () => {
    detailsRef.current?.expand();
  };
  const handleChangeMusic = () => {
    musicRef.current?.expand();
  };
  const handleCloseIcon = () => {
    CloseBtnRef.current?.close();
  };

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  return (
    <SafeAreaView style={commonStyle.container}>
      {/* Header */}
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
            colors={["#FFAB0E", "#FF28DF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.SaveContainer}
          >
            <Image
              source={Icon.shareIcon}
              style={{
                width: wp(5),
                height: wp(5),
                marginRight: wp(1),
                tintColor: "white",
              }}
            />
            <Text style={styles.saveText}>Save</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Dummy Image Box */}
      <View
        style={{
          marginHorizontal: wp(12),
          height: hp(63),
          borderRadius: hp(1.5),
          marginTop: hp(2.5),
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e0e0e0",
        }}
      >
        <Pressable
          onPress={handleCloseIcon}
          style={{
            position: "absolute",
            top: hp(1.5),
            right: hp(1.5),
            padding: wp(1),
            backgroundColor: "red",
            borderRadius: hp(50),
          }}
        >
          <Image
            source={Icon.closeIcon}
            style={{
              width: wp(4),
              height: wp(4),
              tintColor: "white",
            }}
          />
        </Pressable>
      </View>

      {/* Label */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: hp(2.5),
        }}
      >
        <Text>Track</Text>
      </View>

      <View
        style={{
          marginHorizontal: wp(18),
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={handleChangeImage}
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            padding: hp(1.5),
            borderRadius: hp(2),
          }}
        >
          <Image
            source={Icon.galleryIcon}
            style={{ width: wp(8), height: wp(8) }}
          />
          <Text style={{ fontWeight: "600" }}>Change Image</Text>
        </Pressable>

        <Pressable
          onPress={handleChangeMusic}
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            padding: hp(2),
            borderRadius: hp(2),
          }}
        >
          <Image
            source={Icon.soundIcon}
            style={{ width: wp(8), height: wp(8) }}
          />
          <Text style={{ fontWeight: "600" }}>Change Music</Text>
        </Pressable>
      </View>

      {/* Change Image Bottom Sheet */}
      <BottomSheet
        snapPoints={[bottomViewDetailsHeight + hp(4)]}
        ref={detailsRef}
        onChange={handleSheetChanges}
        index={-1}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView
          onLayout={({ nativeEvent: { layout } }) => {
            setBottomViewDetailsHeight(layout.height);
          }}
          style={styles.contentContainer}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: hp(2) }}>
              Select Image
            </Text>

            <TouchableOpacity>
              <LinearGradient
                colors={["#FFAB0E", "#FF28DF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.SaveContainer}
              >
                <Text
                  style={{
                    paddingHorizontal: hp(1),
                    color: "white",
                    paddingVertical: wp(0.5),
                    fontWeight: "600",
                  }}
                >
                  Done
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
      {/* Change Music Bottom Sheet */}
      <BottomSheet
        snapPoints={[bottomViewMusicHeight + hp(4)]}
        ref={musicRef}
        onChange={handleSheetChanges}
        index={-1}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView
          onLayout={({ nativeEvent: { layout } }) => {
            setBottomViewMusicHeight(layout.height);
          }}
          style={styles.contentContainer}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: hp(2) }}>Music</Text>

            <Pressable
              onPress={() => {}}
              style={{
                padding: wp(1),
                backgroundColor: "red",
                borderRadius: hp(50),
              }}
            >
              <Image
                source={Icon.closeIcon}
                style={{
                  width: wp(4),
                  height: wp(4),
                  tintColor: "white",
                }}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: hp(2),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: hp(1),
                marginTop: hp(2),
                paddingHorizontal: hp(3),
                paddingVertical: hp(2),
                borderRadius: hp(3),
                marginBottom: hp(2),
                backgroundColor: "#F5F5F5",
              }}
            >
              <Image
                source={Icon.headphoneIcon}
                style={{ width: wp(6), height: wp(6) }}
              />
              <Text style={{ fontWeight: "600" }}>Unmute</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: hp(1) }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: hp(1),
                  marginTop: hp(2),
                  paddingHorizontal: hp(3),
                  paddingVertical: hp(2),
                  borderRadius: hp(3),
                  marginBottom: hp(2),
                  backgroundColor: "#F5F5F5",
                }}
              >
                <Image
                  source={Icon.musicIcon}
                  style={{ width: wp(6), height: wp(6) }}
                />
                <Text style={{ fontWeight: "600" }}>Add Music</Text>
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
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
    marginTop: wp(9),
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
    marginLeft: wp(2.5),
    justifyContent: "space-between",
  },
  SaveContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: hp(1.5),
    paddingVertical: wp(1.5),
    borderRadius: hp(2),
  },
  saveText: {
    fontSize: hp(2),
    color: "white",
    fontWeight: "600",
  },
  contentContainer: {
    padding: hp(3),
  },
});
