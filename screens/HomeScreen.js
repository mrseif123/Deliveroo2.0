import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React, { useLayoutEffect } from 'react'
import {UserIcon, ChevronDownIcon, SearchIcon} from "react-native-heroicons/outline"
import {useNavigation} from '@react-navigation/native'
import { Svg, Path } from "react-native-svg";
import { Searchbar, TextInput } from "react-native-paper";

function HomeScreen() {

  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView style={styles.container} className="bg-white pt-5 ">
      <View className="text-red-500">
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="he-7 w-7 bg-gray-300 rounded-full p-4"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location!
              <ChevronDownIcon size={24} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={34} color="#00CCBB" />
        </View>
        {/* Search Bar */}
        <View className="flex-row items-center space-x-2 pb-2 mx-2 px-2 ">
          <View className="flex-row flex-1 space-x-2 bg-white-200 p-3">
            <Searchbar
              placeholder="Restaurnats & Cusinese"
              className="bg-grey flex-1"
              iconColor="grey"
            />
          </View>
          <Svg
            style={{ color: "#00CCBB" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <Path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </Svg>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  }, 
});

export default HomeScreen;