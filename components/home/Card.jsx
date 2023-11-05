import { Text, View, Image, FlatList, Dimensions, TouchableWithoutFeedback } from "react-native";
import React, { useRef, useState } from "react";
import styles from "./card.style";
import { Ionicons } from "@expo/vector-icons";
import { Link } from '@react-navigation/native';

const Card = ({ username, profilPicture, captions, image, category, createdAt }) => {
  const[isLike, setIsLike] = useState(false)

  const handleLike = () => {
    setIsLike(!isLike)
  }
  
  const screenwidth = Dimensions.get("window").width;

  const renderItems = ({ item, index}) => {
    return (
      <View>
        <Image
          source={{ uri: image}}
          style={[styles.imageContent, { width: screenwidth }]}
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
            <Text style={{ fontSize: 12 }}>{createdAt}</Text>
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
            data={image.slice(0, 4)}
            renderItem={renderItems}
            horizontal={true}
            pagingEnabled={true}
          />
        </View>

        {/* actions */}
        <View style={styles.actions}>
          <TouchableWithoutFeedback onPress={handleLike}>
            {isLike ? (<Ionicons name="heart" size={28} color={'red'} />) : (<Ionicons name="heart-outline" size={28} />)}
          
          </TouchableWithoutFeedback>
          <Link to={{screen: 'Modal'}}>
            <Ionicons name="chatbubble-outline" size={26} />
          </Link>
          <Ionicons name="share-outline" size={26} />
        </View>
      </View>
    </View>
  );
};

export default Card;
