import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Currency from "react-currency-formatter";
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
const DishRow = ({
  id, name, description, price, image
}) => {
    const [isPressed, setIsPressed] = React.useState();
   name = "Peri Pero Nuts"
   description = "Crumchu almonds, cashews and macdamia nuts in a fiery Peri"
   price=4.99

   
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-l mb-1">{name}</Text>
            <View></View>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="GBP" />
            </Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#f3f3f4" }}
              className="h-20 w-20 bg-gray-300"
              source={{
                // uri: urlFor(image.asset._ref).url
                uri: "https://links.papareact.com/gn7",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon color="#00ccbb" size={40} />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon color="#00ccbb" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

export default DishRow