import { Text, View, Image, Pressable, Dimensions } from "react-native";
import React from "react";
import styles from "./detailUsers.style";
import { useEffect, useState } from "react";
import { getDetailUser } from "../../../hook/api";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { searchData } from "../../../redux/Search/searchdatauserSlice";

const DetailUsers = ({ route }) => {
  const idSearchUsers = route.params?.userId;

  const [detailData, setDetailData] = useState([]);
  const [isFollow, setIsFollow] = useState(false)
  const [imgDummy, setImgDummy] = useState(
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
  );

  const dispatch = useDispatch()
  const navigation = useNavigation();
  const screenwidth = Dimensions.get("window").width;
  const selector = useSelector((state) => state.auth);
  console.log("SW:", screenwidth);

  useEffect(() => {
    const getUser = async (id) => {
      const response = await getDetailUser(id);
      dispatch(searchData(response))
      setDetailData(response.data);
      console.log(response.data);
    };
    console.log(isFollow);
    getUser(idSearchUsers);
  }, []);

  const handleFollow = () => {
    if (!selector.token) {
      alert("buat akun dulu, baru bisa follow!");
      console.log("login dulu gasi");
    } else{
      console.log(selector.token);
      console.log("kamu sudah follow user dengan id: ", idSearchUsers);
      let data = ''
      axios.post(`http://192.168.1.16:5000/user/follow/${idSearchUsers}`, data ,{
        headers: {
          'Authorization': `${selector.token}`,
        },
      }).then((response) => {
        console.log(response.data);
        setIsFollow(true)
      }).catch((error) => {
        console.log(error.response.data);
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text>Id User: {idSearchUsers}</Text> */}

      {[detailData].map((items, idx) => (
        <View style={styles.wrapper} key={idx}>
          <View style={styles.descDataUser}>
            {/* Avatar */}
            <View style={{ alignItems: "center", gap: 5 }}>
              <Image
                source={{ uri: imgDummy }}
                style={{ width: 80, height: 80, borderRadius: 100 / 2 }}
              />
            </View>

            {/* Data Folower, Folowing, dan Postingan User */}
            <View>
              <View style={styles.data}>
                <View style={{ alignItems: "center", gap: 4 }}>
                  <Text style={{ fontFamily: 'semibold', fontSize: 17 }}>{items.posts?.length}</Text>
                  <Text style={{ fontFamily: 'regular' }}>Postingan</Text>
                </View>

                <View style={{ alignItems: "center", gap: 4 }}>
                  <Text style={{ fontFamily: 'semibold', fontSize: 17 }}>{items.followersCount}</Text>
                  <Text style={{ fontFamily: 'regular' }}>Follower</Text>
                </View>

                <View style={{ alignItems: "center", gap: 4 }}>
                  <Text style={{ fontFamily: 'semibold', fontSize: 17 }}>{items.followingCount}</Text>
                  <Text style={{ fontFamily: 'regular' }}>Following</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.nameUsers}>
            <Text style={{ fontFamily: "semibold", fontSize: 18 }}>{items.name}</Text>
          </View>

          {/* Button Follow */}
          <View style={styles.btnFollow}>
            {isFollow ? (
              <Pressable
                onPress={handleFollow}
                style={{
                  backgroundColor: "#4f46e5",
                  width: `${100 / 2}%`,
                  paddingVertical: 10,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#fff" }}>Follow</Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={handleFollow}
                style={{
                  backgroundColor: "black",
                  width: `${100 / 2}%`,
                  paddingVertical: 10,
                  borderRadius: 8,
                  alignItems: "center",
                }}
                disabled
              >
                <Text style={{ color: "#fff" }}>Follow</Text>
              </Pressable>
            )}
            
          </View>

          {/* Data Postingan */}
          <View style={styles.post}>
            {[0, 1, 2, 3, 4].map((items, idx) => {
              return (
                <View key={idx}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("DetailPost");
                    }}
                  >
                    <Image
                      source={{ uri: imgDummy }}
                      style={{ width: screenwidth / 3.03, height: 150 }}
                    />
                  </Pressable>
                </View>
              );
            })}
          </View>
        </View>
      ))}

    </View>
  );
};

export default DetailUsers;
