import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { TouchableOpacity } from "react-native";
import {
  ArrowLeftIcon,
  StarIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { Svg, Path } from "react-native-svg";
import DishRow from "../components/DishRow";
import BasketBar from "../components/BasketBar";
import { basketItems } from "../features/basketSlice";
import { setRestaurant } from "../features/restaurantSlice";

import { useSelector, useDispatch } from "react-redux";
const RestaurantScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = route.params;
  const items = useSelector(basketItems);

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl.asset._ref).url() }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-7 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon color="#00ccbb" size={22} />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> · {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Svg
                  style={{ color: "gray" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </Svg>
                <Text className="text-xs text-gray-500">
                  Nearby · {address.split(" ")[0]}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="grey" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="mb-15">
          <Text className="p-4 pt-6 font-bold text-xl">Menu</Text>
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
      {items.length > 0 && <BasketBar />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default RestaurantScreen;
