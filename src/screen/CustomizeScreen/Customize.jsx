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
import { FlashList } from "@shopify/flash-list";

const Customize = ({ navigation }) => {
  const [imageData, setImageData] = useState([
    { id: "1", uri: Icon.sliderImage },
    { id: "2", uri: Icon.sliderImage },
    { id: "3", uri: Icon.sliderImage },
    { id: "4", uri: Icon.sliderImage },
    { id: "5", uri: Icon.sliderImage },
    { id: "6", uri: Icon.sliderImage },
  ]);
  const [bottomViewDetailsHeight, setBottomViewDetailsHeight] = useState(
    hp(30)
  );

  const [bottomViewMusicHeight, setBottomViewMusicHeight] = useState(1);
  const [bottomViewCloseHeight, setBottomViewCloseHeight] = useState(1);
  const [bottomViewTextHeight, setBottomViewTextHeight] = useState(1);

  const detailsRef = useRef(null);
  const musicRef = useRef(null);
  const CloseBtnRef = useRef(null);
  const TextRef = useRef(null);
  const snapPoints = useMemo(
    () => [bottomViewDetailsHeight + hp(2)],
    [bottomViewDetailsHeight]
  );

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
    CloseBtnRef.current?.expand();
  };
  const handleText = () => {
    TextRef.current?.expand();
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
        <Pressable style={styles.iconContainer}>
          <Image
            source={Icon.BackArrowIcon}
            style={styles.icon}
            contentFit="contain"
          />
        </Pressable>

        <Pressable style={styles.centerContainer}>
          <Image
            source={Icon.showEyeIcon}
            style={styles.icon}
            contentFit="contain"
          />
        </Pressable>

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
        <TouchableOpacity
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
        </TouchableOpacity>
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
          marginHorizontal: wp(2),
          gap: hp(1),
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        <Pressable
          onPress={handleChangeImage}
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            padding: hp(1),
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
          onPress={handleText}
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            padding: hp(1.5),
            borderRadius: hp(2),
          }}
        >
          <Image
            source={Icon.textIcon}
            style={{ width: wp(8), height: wp(8) }}
          />
          <Text style={{ fontWeight: "600" }}>Change Text</Text>
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

      {/* Close Bottom Sheet */}
      <BottomSheet
        snapPoints={snapPoints}
        ref={CloseBtnRef}
        onChange={handleSheetChanges}
        index={-1}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView
          onLayout={({ nativeEvent: { layout } }) => {
            setBottomViewCloseHeight(layout.height);
          }}
          style={styles.contentContainer}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={{}}>
              <Text style={{ fontWeight: "600", fontSize: hp(2) }}>
                Remove Watermark
              </Text>
            </View>
            <Pressable
              style={{
                position: "absolute",
                right: hp(0),
              }}
            >
              <Image
                source={Icon.closeIcon}
                style={{ width: wp(6), height: wp(6) }}
              />
            </Pressable>
          </View>
          <LinearGradient
            colors={["#FFAB0E", "#FF28DF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              marginTop: hp(5),
              marginHorizontal: hp(2),
              backgroundColor: "red",
              padding: hp(2),
              borderRadius: hp(4),
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              gap: wp(2),
            }}
          >
            <Image
              source={Icon.videoIcon}
              style={{ width: wp(5), height: wp(5), alignSelf: "center" }}
            />
            <Text
              style={{ color: "white", fontWeight: "600", alignSelf: "center" }}
            >
              Watch Video Ad
            </Text>
          </LinearGradient>
          <View style={{ alignItems: "center", marginTop: hp(2) }}>
            <Text style={{ fontWeight: "semibold", fontSize: hp(2) }}>Or</Text>
          </View>
          <View
            // colors={["#FFAB0E", "#FF28DF"]}
            // start={{ x: 0, y: 0 }}
            // end={{ x: 1, y: 0 }}
            style={{
              marginTop: hp(2),
              marginHorizontal: hp(2),
              backgroundColor: "#FFD801",
              padding: hp(2),
              borderRadius: hp(4),
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              gap: wp(2),
            }}
          >
            <Image
              source={Icon.crownIcon2}
              style={{ width: wp(5), height: wp(5), alignSelf: "center" }}
            />
            <Text style={{ fontWeight: "500", alignSelf: "center" }}>
              Buy Subscription
            </Text>
          </View>
        </BottomSheetView>
      </BottomSheet>

      {/* Change Image Bottom Sheet */}
      <BottomSheet
        snapPoints={snapPoints}
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

          {/* <View
            style={{
              marginTop: hp(2),
              width: wp(20),
              height: wp(20),
              borderRadius: hp(1),
              overflow: "hidden",
            }}
          >
            <Pressable>
              <Image
                source={Icon.sliderImage}
                style={{ width: "100%", height: "100%" }}
              />
            </Pressable>
          </View> */}
          <View style={{ height: wp(22), marginTop: hp(2) }}>
            <FlashList
              data={[
                Icon.sliderImage,
                Icon.sliderImage,
                Icon.sliderImage,
                Icon.sliderImage,
                Icon.sliderImage,
                Icon.sliderImage,
                Icon.sliderImage,
                Icon.sliderImage,
              ]}
              renderItem={({ item }) => (
                <View
                  style={{
                    marginRight: wp(2),
                    width: wp(15.8),
                    height: wp(16),
                    borderRadius: hp(1),
                    overflow: "hidden",
                  }}
                >
                  <Pressable>
                    <Image
                      source={item}
                      style={{ width: "100%", height: "100%" }}
                      contentFit="cover"
                    />
                  </Pressable>
                </View>
              )}
              estimatedItemSize={wp(22)}
              keyExtractor={(_, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              horizontal
              scrollEnabled
            />
          </View>
        </BottomSheetView>
      </BottomSheet>

      {/* Change Text Bottom Sheet */}
      <BottomSheet
        snapPoints={[bottomViewTextHeight + hp(4)]}
        ref={TextRef}
        onChange={handleSheetChanges}
        index={-1}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView
          onLayout={({ nativeEvent: { layout } }) => {
            setBottomViewTextHeight(layout.height);
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
              Change Text Details
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
    marginTop: wp(10),
    marginVertical: wp(2),
  },
  iconContainer: {
    padding: wp(3),
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: wp(8.5),
  },
  icon: {
    width: wp(8),
    height: wp(8),
  },
  SaveContainer: {
    flexDirection: "row",
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
