import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  basketItems,
  removeFromBasket,
  selectBasketTotal,
} from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { SafeAreaView, StyleSheet, StatusBar, Image } from "react-native";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const items = useSelector(basketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasker] = useState([]);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);
  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[items.id] = results[items.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasker(groupedItems);
  }, [items]);

  return (
    <SafeAreaView style={styles.container} className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-gray-400 text-center">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00ccbb" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Delivery in 50-70 mins</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00ccbb]">{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0].image.asset._ref).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00ccbb] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="GBP" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="GBP" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Order total</Text>
            <Text className="black font-extrabold">
              <Currency quantity={basketTotal + 5.99} currency="GBP" />
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Preparing")}
            className="rounded-lg bg-[#00ccbb] p-4"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default BasketScreen;
