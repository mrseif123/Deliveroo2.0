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
import {useNavigation} from '@react-navigation/native'

function HomeScreen() {

  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <View>
        <Image source={{uri:"https://links.papareact.com/wru"}} className="he-7 w-7 bg-gray-300 rounded-full p-4"/>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});

export default HomeScreen;