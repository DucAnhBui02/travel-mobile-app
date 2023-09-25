import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import * as Icons from "react-native-heroicons/outline";
import Categories from "../components/categories";
import SortCategories from "../components/sortCategories";
import Destinations from "../components/destinations";

const android = Platform.OS == "android";
const topMargin = android ? "mt-5" : "mt-10";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={"space-y-6" + topMargin}
      >
        <View className="mt-10 mx-5 flex-row justify-between items-center mb-10">
          <Text
            style={{ fontSize: wp(7) }}
            className="font-bold text-neutral-700"
            onPress={() => navigation.goBack()}
          >
            Let's DisCover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{ width: wp(12), height: wp(12) }}
            />
          </TouchableOpacity>
        </View>

        {/* search bar */}

        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
            <Icons.MagnifyingGlassIcon
              strokeWidth={3}
              color={"gray"}
              size={20}
            />
            <TextInput
              placeholderTextColor={"gray"}
              placeholder="Search Destination"
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            />
          </View>
        </View>
        {/* categories */}
        <View className="mb-4">
          <Categories />
        </View>
        <View className="mb-4">
          <SortCategories />
        </View>
        <View className="mb-4">
          <Destinations />
        </View>
      </ScrollView>
    </View>
  );
}
