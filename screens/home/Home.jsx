import { Text, View, Image, ScrollView, Pressable, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/home/Header";
import { StatusBar } from "expo-status-bar";
import styles from "./home.style";
import Card from "../../components/home/Card";
import { getData } from "../../hook/api";
import LottieView from "lottie-react-native";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [dataContent, setDataContent] = useState([]);
  const [isloading, setIsLoading] = useState(true)

  const animation = useRef(null);
  const screenheight = Dimensions.get("window").height;

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
    setTimeout(() => {
      getData()
        .then((res) => {
          // console.log("respon", res);
          setDataContent(res);
        })
        .catch((err) => {
          console.log(err);
        }).finally(() => {
          setIsLoading(false)
        });
    }, 5000);
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
          {/* {console.log(dataContent.length)} */}
          {isloading ? (
            <View style={{ 
              height: 600,  
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center'
              }}>
              
              <View style={{width: 300, height: 300,}}>
                <LottieView
                  autoPlay
                  ref={animation}
                  style={{
                    width: 300,
                    height: 300,
                  }}
                  // Find more Lottie files at https://lottiefiles.com/featured
                  source={require('../../assets/loading.json')}
                  />
              </View>
            </View>
      ) : dataContent.map((items, index) => {
            return (
              <View key={items.id}>
                <Card
                  username={items.username}
                  profilPicture={items.profilePicture}
                  captions={items.captions}
                  category={items.category}
                  image={items.image}
                  createdAt={items.createdAt}
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
