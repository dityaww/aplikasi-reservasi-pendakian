import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import EditProfile from "./screens/edit-profile/EditProfile";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import ModalScreen from "./components/home/ModalScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/FiraSans-Regular.ttf"),
    medium: require("./assets/fonts/FiraSans-Medium.ttf"),
    semibold: require("./assets/fonts/FiraSans-SemiBold.ttf"),
    bold: require("./assets/fonts/FiraSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Edit"
          component={EditProfile}
          options={{
            headerBackTitle: "back",
            headerTitle: "Change Profil",
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerBackVisible: false,
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerBackVisible: false,
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{
            headerBackVisible: false,
            headerTitle: 'Comments',
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "regular",
    fontSize: 20,
  },
});
