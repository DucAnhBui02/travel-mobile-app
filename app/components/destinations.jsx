import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { destinationData } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function Destinations() {
  const navigation = useNavigation();

  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {destinationData.map((destination, index) => {
        return (
          <DestinationCard
            item={destination}
            key={index}
            navigation={navigation}
          />
        );
      })}
    </View>
  );
}

const DestinationCard = ({ item, navigation }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const toggleColor = () => {
    setIsFavourite(!isFavourite);
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Destination", { ...item })}
      style={{ width: wp(44), height: wp(65) }}
      className="flex justify-end relative p-4 py-6 mb-5 space-y-2"
    >
      <Image
        source={item.image}
        style={{ width: wp(44), height: wp(65), borderRadius: 35 }}
        className="absolute"
      />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{
          width: wp(45),
          height: hp(15),
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-0"
      />
      <TouchableOpacity
        style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
        className="absolute top-1 right-3 rounded-full p-3 "
        onPress={() => toggleColor()}
      >
        <HeartIcon size={wp(5)} color={isFavourite ? "red" : "white"} />
      </TouchableOpacity>
      <Text className="text-white font-semibold" style={{ fontSize: wp(4) }}>
        {item.title}
      </Text>
      <Text className="text-white " style={{ fontSize: wp(2.2) }}>
        {item.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};
