import React, { useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { client } from "../sanity";

export const FeaturedRow = (props) => {
  const { id, title, description } = props;
  const [restaurants, setRestaurants] = React.useState([]);
  useEffect(() => {
    client
      .fetch(
        `
*[_type == "featured" && _id==$id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
            type->{
              name
            }
          },
        }[0]
        `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);

      });
  }, []);


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
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant.id}
            imgUrl={restaurant.image}
            address={restaurant.address}
            title={restaurant.name}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            short_description={restaurant.short_description}
            genre={restaurant.type?.name}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
        {/* 
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
        /> */}
      </ScrollView>
    </View>
  );
};
