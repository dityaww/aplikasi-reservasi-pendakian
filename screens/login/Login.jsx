// import { Link } from 'expo-router'
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./login.style";
import { Link } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailed } from "../../redux/Auth/authSlice";
import axios from "axios";

const Login = ({navigation}) => {
  const [isFocused, SetIsFocused] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.auth);

  const handleFocus = (id) => {
    SetIsFocused(id);
  };

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Please fill in all fields!");
    } else {
      const credentials = { email, password };

      axios
        .post("http://192.168.1.16:5000/auth/login", credentials)
        .then((response) => {
          dispatch(loginSuccess(response.data));
          setErrorMessage("");
        })
        .catch((error) => {
          // console.log(error.response.data);
          dispatch(loginFailed(error.response.data));
          setErrorMessage(error.response.data.error);
        });

         
    }
  };

  useEffect(() => {
    if (!selector.token) {
      console.log("login gagal!");
    } else {
      console.log("login success!");
      navigation.navigate('Home')
    }
  }, [selector]);

  console.log(selector);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.fields}>
          <View style={styles.logo}>
            <Image
              source={require("../../assets/mount-icons.png")}
              style={{ width: 163, height: 177 }}
            />
          </View>
          <Text style={styles.title}>Login to your account</Text>
          {errorMessage ? (
            <Text style={{ color: "red", fontStyle: "italic" }}>
              *{errorMessage}
            </Text>
          ) : null}
          <View
            style={[
              styles.textInput,
              isFocused === "email" && styles.focusedTextInput,
            ]}
          >
            <TextInput
              label={"email"}
              placeholder={"masukkan email"}
              keyboardAppearance={"dark"}
              style={[{ fontFamily: "regular", fontSize: 16 }]}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleFocus("")}
              value={email}
              onChangeText={(user) => {
                setEmail(user);
                setErrorMessage("");
              }}
            />
          </View>

          <View
            style={[
              styles.textInput,
              isFocused === "password" && styles.focusedTextInput,
            ]}
          >
            <TextInput
              label={"password"}
              placeholder={"masukkan password"}
              keyboardAppearance={"dark"}
              onFocus={() => handleFocus("password")}
              onBlur={() => handleFocus("")}
              secureTextEntry
              style={[{ fontFamily: "regular", fontSize: 16 }]}
              onChangeText={(pass) => {
                setPassword(pass);
                setErrorMessage("");
              }}
              value={password || ""}
            />
          </View>
          <Text>
            {email},{password}
          </Text>
        </View>
        <View style={styles.submit}>
          <TouchableHighlight
            onPress={handleLogin}
            underlayColor="#818cf8"
            style={styles.btnSignIn}
          >
            <View>
              <Text style={{ color: "#fff", fontFamily: "bold" }}>Sign In</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.link}>
            <Text style={{ fontFamily: "regular", fontSize: 15 }}>
              Dont have account?
            </Text>
            <Link
              to={{ screen: "Register" }}
              style={{ color: "#818cf8", fontFamily: "bold", fontSize: 15 }}
            >
              Register Now
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
