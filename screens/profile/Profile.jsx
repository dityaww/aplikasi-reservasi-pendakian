import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./profile.style";
import { Ionicons } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      {/* <SafeAreaView> */}
      <View style={styles.container}>
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
                <Text style={styles.username}>dityaww</Text>
                <Text style={[styles.name, { color: "#404040" }]}>
                  Aditya Widyatmoko
                </Text>
              </View>
              <View style={styles.postCount}>
                <View style={styles.middlePost}>
                  <Text style={{ fontFamily: "bold" }}>0</Text>
                  <Text>Postingan</Text>
                </View>
                <View style={styles.middlePost}>
                  <Text style={{ fontFamily: "bold" }}>200</Text>
                  <Text>Pengikut</Text>
                </View>
                <View style={styles.middlePost}>
                  <Text style={{ fontFamily: "bold" }}>240</Text>
                  <Text>Mengikuti</Text>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
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
                    style={[styles.imgContent]}
                  />
                </View>
              );
            })}
          </View>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ borderWidth: 1, paddingHorizontal: 20}}>Login</Text>
          </TouchableOpacity>
          <Text style={{ borderWidth: 1, paddingHorizontal: 20}}>Register</Text>
        </View>
      </View>
      {/* </SafeAreaView> */}
    </ScrollView>
  );
};

export default Profile;
