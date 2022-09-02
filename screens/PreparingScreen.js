import { View } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import AwesomeLoading from "react-native-awesome-loading";

const PreparingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  });
  return (
    <View className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/anim.gif")}
        iterationCount={1}
        animation="slideInUp"
        className="h-96 w-96"
      />
      {/* <LottieView source={require("../assets/anim.json")} autoPlay /> */}
      <Animatable.Text
        animation="slideInUp"
        className="text-lg my-10 px-3 text-white font-bold text-center"
      >
        Waiting for order acceptance...
      </Animatable.Text>
      <Progress.Bar size={30} color="white" indeterminate={true} />
    </View>
  );
};

export default PreparingScreen;
