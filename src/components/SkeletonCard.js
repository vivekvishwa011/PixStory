// components/SkeletonCard.js
import React from "react";
import { View } from "react-native";
import { MotiView } from "moti";
import { hp, wp } from "../constants/commonStyle";

const SkeletonCard = () => (
  <MotiView
    from={{ opacity: 0.3 }}
    animate={{ opacity: 1 }}
    transition={{ loop: true, type: "timing", duration: 1000 }}
    style={{
      width: wp(25.5),
      height: hp(21),
      borderRadius: hp(1),
      backgroundColor: "#e0e0e0",
      marginRight: wp(3),
    }}
  />
);

export default SkeletonCard;
