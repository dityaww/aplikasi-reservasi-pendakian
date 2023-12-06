import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./profile.style";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Auth/authSlice";
import axios from "axios";
import { usersFetched } from "../../redux/Auth/usersSlice";

const Profile = ({ navigation }) => {
  const [haveAccount, setHaveAccount] = useState(false);
  const [userData, setUserData] = useState([]);

  const [myPost, setMyPost] = useState([]);

  const screenW = Dimensions.get("window").width;
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.auth);
  const selectorUserId = useSelector((state) => state.users);

  const handleLogout = async () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (selector.token !== null) {
      const idUser = selectorUserId.data.id;

      const userInfo = async (id) => {
        const response = await axios.get(
          `http://192.168.1.16:5000/user/userprofile/${id}`
        );
        return response.data;
      };

      const checkUsers = async () => {
        const response = await axios.get(
          "http://192.168.1.16:5000/auth/whoami",
          {
            headers: {
              authorization: `${selector.token}`,
            },
          }
        );
        return response.data;
      };

      const whoami = async () => {
        try {
          const response = await checkUsers();
          dispatch(usersFetched(response));
          // console.log("whoami:", response);
        } catch (error) {
          console.log(error);
        }
      };

      const getDataUsers = async (q) => {
        const response = await userInfo(q);
        setUserData(response.data);
      };

      whoami();
      getDataUsers(idUser);

      setHaveAccount(true);
    } else {
      setHaveAccount(false);
    }
  }, [selector, userData]);

  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      <View style={styles.container}>
        {haveAccount ? (
          <>
            {/* {[userData].map((items, idx) => {
              return (
                <View key={idx}>
                  <View style={styles.topContent}>
                    <View style={styles.Identity}>
                      <Image
                        source={{
                          uri: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
                        }}
                        style={styles.imgProfile}
                      />
                      <View style={styles.detailInfo}>
                        <View>
                          <Text style={styles.username}>
                            {items.name || ""}
                          </Text>
                          <Text style={[styles.name, { color: "#404040" }]}>
                            {items.email}
                          </Text>
                        </View>
                        <View style={styles.postCount}>
                          <View style={styles.middlePost}>
                            <Text style={{ fontFamily: "bold" }}>
                              {items.posts?.length}
                            </Text>
                            <Text>Postingan</Text>
                          </View>
                          <View style={styles.middlePost}>
                            <Text style={{ fontFamily: "bold" }}>
                              {items.followersCount}
                            </Text>
                            <Text>Pengikut</Text>
                          </View>
                          <View style={styles.middlePost}>
                            <Text style={{ fontFamily: "bold" }}>
                              {items.followingCount}
                            </Text>
                            <Text>Mengikuti</Text>
                          </View>
                        </View>
                      </View>
                    </View>

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Edit")}
                    >
                      <View>
                        <Ionicons name="create" size={28} color={"#d4d4d4"} />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.mainContent}>
                    <View style={styles.displayContent}>
                      {[0, 1, 2, 3, 4].map((items, index) => {
                        return (
                          <View key={index}>
                            <Image
                              source={{
                                uri: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
                              }}
                              style={{ width: screenW / 3.03, height: 150 }}
                            />
                          </View>
                        );
                      })}
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={handleLogout}
                    style={styles.btnLogin}
                  >
                    <Text style={{ color: "#ffffff" }}>Logout</Text>
                  </TouchableOpacity>
                </View>
              );
            })} */}
            <Text>Sudah Login</Text>
            <TouchableOpacity onPress={handleLogout} style={styles.btnLogin}>
              <Text style={{ color: "#ffffff" }}>Logout</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.noAccount}>
            <Image
              source={require("../../assets/no-account.png")}
              style={styles.imgNoAccount}
            />

            <Text>Dont have Account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.btnLogin}
            >
              <Text style={{ color: "#ffffff" }}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {/* </SafeAreaView> */}
    </ScrollView>
  );
};

export default Profile;
