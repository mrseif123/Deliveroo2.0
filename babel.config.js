module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: ["tailwindcss-react-native/babel", "react-native-paper/babel"],
  };
};
