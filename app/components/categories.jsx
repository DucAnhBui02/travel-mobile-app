import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { theme } from "../theme";
import { categoriesData } from "../constants";

export default function Categories() {
  return (
    <View className="space-y-5">
      <View className="mx-5 flex-row justify-between items-center">
        <Text
          style={{ fontSize: wp(4) }}
          className="font-extrabold text-neutral-700"
        >
          Categories
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: theme.text }}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="space-x-4"
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((cat, index) => (
          <TouchableOpacity key={index} className="flex items-center space-y-2">
            <Image
              source={cat.image}
              style={{ width: wp(20), height: wp(20) }}
              className="rounded-3xl"
            />
            <Text
              className="text-neutral-700 font-bold"
              style={{ fontSize: wp(3) }}
            >
              {cat.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
