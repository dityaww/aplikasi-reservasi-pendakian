import {
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./card.style";
import { Ionicons } from "@expo/vector-icons";
import { Link, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { usersFetched } from "../../redux/Auth/usersSlice";

const Card = ({
  username,
  profilPicture,
  captions,
  image,
  category,
  createdAt,
  like,
  idContent,
}) => {
  const [isLike, setIsLike] = useState(false);
  // const [token, setToken] = useState("");
  const [imgProfile, setImgProfile] = useState(
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
  );

  const navigation = useNavigation();
  const selector = useSelector((state) => state.auth);

  const handleLike = () => {
    if (!selector.token) {
      // console.log("anda belum memiliki akun");
      alert("anda belum punya akun!");
      console.log("token: ", selector.token);
    } else {
      let data = "";

      axios
        .post(`http://192.168.1.16:5000/post/likepost/${idContent}`, data, {
          headers: {
            authorization: `${selector.token}`,
          },
        })
        .then((res) => {
          setIsLike(!isLike);
          console.log(isLike);
          console.log("from Like:", res.data);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    // const getUserData = async () => {
    //   const response = await axios.get("http://192.168.1.16:5000/auth/whoami", {
    //     headers: {
    //       'authorization': `${selector.token}`,
    //     },
    //   });
    //   return response.data;
    // };
    // if(selector.token !== null){
    //   getUserData().then((res) => {
    //     dispatch(usersFetched(res))
    //   }).catch((error) => console.log(error))
    // }
    console.log("Like: ", isLike);
  }, [isLike]);

  const screenwidth = Dimensions.get("window").width;

  const renderItems = ({ item, index }) => {
    return (
      <View>
        <Image
          source={{ uri: image || imgProfile }}
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
              uri: `${profilPicture || imgProfile}`,
            }}
            style={styles.img}
          />
          <View>
            <Text style={{ fontFamily: "bold", fontSize: 16 }}>{username}</Text>
            <Text style={{ fontSize: 12 }}>{createdAt}</Text>
            <Text style={{ fontSize: 12 }}>{idContent}</Text>
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
            data={image || imgProfile.slice(0, 3)}
            renderItem={renderItems}
            horizontal={true}
            pagingEnabled={true}
          />
        </View>

        {/* actions */}
        <View style={styles.actions}>
          <TouchableWithoutFeedback onPress={handleLike}>
            {isLike ? (
              <Ionicons name="heart" size={28} color={"red"} />
            ) : (
              <Ionicons name="heart-outline" size={28} />
            )}
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              // handleComments(idContent);
              navigation.navigate({
                name: "Modal",
                params: { userId: idContent },
              });
              console.log("comments clicked!");
            }}
          >
            <Ionicons name="chatbubble-outline" size={26} />
          </TouchableWithoutFeedback>

          <Ionicons name="share-outline" size={26} />
        </View>
        <Text
          style={{
            paddingHorizontal: 20,
            color: "#404040",
            fontFamily: "semibold",
            paddingVertical: 5,
          }}
        >
          {like} likes
        </Text>
      </View>
    </View>
  );
};

export default Card;
