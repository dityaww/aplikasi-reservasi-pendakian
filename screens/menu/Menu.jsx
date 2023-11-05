import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Menu = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Menu</Text>
      </View>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
