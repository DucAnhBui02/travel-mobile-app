import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { sortCategoryData } from "../constants";
import { theme } from "../theme";

export default function SortCategories() {
  const [ActiveSort, setActiveSort] = useState("Popular");

  return (
    <View className="flex-row justify-around items-center mx-4 rounded-full bg-neutral-100">
      {sortCategoryData.map((sort, index) => {
        let isActive = sort == ActiveSort;
        let activeButton = isActive ? "bg-white boxShow" : "";
        return (
          <TouchableOpacity
            key={index}
            className={`p-3 px-4 rounded-full flex ${activeButton}`}
          >
            <Text
              onPress={() => setActiveSort(sort)}
              className="font-semibold"
              style={{
                fontSize: wp(4),
                color: isActive ? theme.text : "rgba(0,0,0,0.6)",
              }}
            >
              {sort}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
