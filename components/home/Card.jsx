import { Text, View, Image, FlatList, Dimensions, Button } from "react-native";
import React, { useRef } from "react";
import styles from "./card.style";
import { Ionicons } from "@expo/vector-icons";

const Card = ({ username, profilPicture, captions, image, category }) => {
  const screenwidth = Dimensions.get("window").width;

  const renderItems = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={[styles.imageContent, { width: screenwidth }]}
          onError={console.log("eror load image")}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* top content */}
        <View style={styles.topContent}>
          <Image
            source={{
              uri: `${profilPicture}`,
            }}
            style={styles.img}
          />
          <View>
            <Text style={{ fontFamily: "bold", fontSize: 16 }}>{username}</Text>
            <Text style={{ fontSize: 12 }}>10 minutes ago</Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 10,
            paddingVertical: 10,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 3,
              borderRadius: 12,
              fontFamily: "bold",
              color: "#4f46e5",
              borderColor: "#6366f1",
            }}
          >
            {category}
          </Text>
        </View>

        {/* captions */}
        <View>
          <Text style={styles.captions}>{captions}</Text>
        </View>

        {/* image post */}
        <View>
          <FlatList
            data={image.slice(0, 2)}
            renderItem={renderItems}
            horizontal={true}
            pagingEnabled={true}
          />
        </View>

        {/* actions */}
        <View style={styles.actions}>
          <Ionicons name="heart-outline" size={28} />
          <Ionicons name="chatbubble-outline" size={26} />
          <Ionicons name="share-outline" size={26} />
        </View>
      </View>
    </View>
  );
};

export default Card;
