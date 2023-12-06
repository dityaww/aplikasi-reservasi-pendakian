import { Text, View, ScrollView } from "react-native";
import React from "react";
import styles from "./detailPost.style";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../../../components/home/Card";

const DetailPost = () => {
  const [data, setData] = useState([])
  const selector = useSelector((state) => state.searchdata)
  // useEffect
  
  useEffect(() => {
    setData(selector.data.posts)
    // console.log(selector.data);
  }, [selector])

  console.log("from selec:", data);
  
  return (
    <View style={styles.container}>
      <ScrollView>
        {data.length !== 0 && data.map((items, index) => {
          return(
            <View key={index}>
              <Card
                idContent={items._id}
                username={selector.data.name}
                // profilPicture={items.profilePicture}
                captions={items.caption}
                category={items.category}
                // image={items.image}
                createdAt={items.createdAt}
                like={items.likes?.length}
              />
            </View>
          )
        })}
      </ScrollView>

    </View>
  );
};

export default DetailPost;
