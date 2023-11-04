import { Text, View, Image, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/home/Header";
import { StatusBar } from "expo-status-bar";
import styles from "./home.style";
import Card from "../components/home/Card";
import { getData } from "../hook/api";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [dataContent, setDataContent] = useState([]);

  const category = [
    {
      id: 1,
      kategori: "All",
    },
    {
      id: 2,
      kategori: "Alam",
    },
    {
      id: 3,
      kategori: "Keramaian",
    },
    {
      id: 4,
      kategori: "Lain-lain",
    },
  ];

  useEffect(() => {
    getData()
      .then((res) => {
        console.log("respon", res);
        setDataContent(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dataContent]);

  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      <View>
        <StatusBar style="dark" />
        {/* <Header /> */}
        <View style={styles.category}>
          {category.map((items, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  setActiveFilter(items.kategori);
                }}
                style={[
                  styles.styleCategory,
                  {
                    backgroundColor:
                      activeFilter == `${items.kategori}`
                        ? "#6366f1"
                        : "#ffffff",
                    borderWidth: activeFilter == `${items.kategori}` ? 0 : 1,
                  },
                ]}
              >
                <Text
                  style={{
                    color:
                      activeFilter == `${items.kategori}`
                        ? "#ffffff"
                        : "#737373",
                  }}
                >
                  {items.kategori}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <View style={styles.postWrapper}>
          {/* <Text style={styles.title}>Share your Experience</Text> */}
          {dataContent.map((items, index) => {
            return (
              <View key={items.id}>
                <Card
                  username={items.username}
                  profilPicture={items.profilePicture}
                  captions={items.captions}
                  category={items.category}
                  image={items.image}
                />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
