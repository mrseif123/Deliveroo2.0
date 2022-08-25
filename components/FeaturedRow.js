import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

export const FeaturedRow = (props) => {
  const { id, title, featuredCategory, description } = props;
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-gray-500  text-xs px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator
        className="pt-4"
      >
        {/* RestaurantCards */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="The Best Pizza"
          rating={4.5}
          genre="Pizza"
          address="1000 5th Ave, New York"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
          dishes={["Pizza", "Pasta", "Salad"]}
          long={-73.975}
          lat={40.782}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="The Best Pizza"
          rating={4.5}
          genre="Pizza"
          address="1000 5th Ave, New York"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
          dishes={["Pizza", "Pasta", "Salad"]}
          long={-73.975}
          lat={40.782}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="The Best Pizza"
          rating={4.5}
          genre="Pizza"
          address="1000 5th Ave, New York"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
          dishes={["Pizza", "Pasta", "Salad"]}
          long={-73.975}
          lat={40.782}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="The Best Pizza"
          rating={4.5}
          genre="Pizza"
          address="1000 5th Ave, New York"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
          dishes={["Pizza", "Pasta", "Salad"]}
          long={-73.975}
          lat={40.782}
        />
      </ScrollView>
    </View>
  );
}