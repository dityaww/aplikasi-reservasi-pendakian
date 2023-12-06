import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./edit.style";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constants/theme";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { usersFetched } from "../../redux/Auth/usersSlice";

const EditProfile = ({ navigation }) => {
  const [image, setImage] = useState(
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
  );
  const [dataUsers, setDataUsers] = useState([])

  // const dispatch = useDispatch()
  const selector = useSelector((state) => state.users);

  // console.log(selector);

  useEffect(() => {
    // axios
    //   .get("http://192.168.1.6:5000/auth/whoami", {
    //     headers: { "authorization": `${selector.token}` },
    //   })
    //   .then((response) => {
    //     setDataUsers(response.data.data)
    //     // console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    
    // console.log("Users:", selector);

    setDataUsers(selector.data)  
  }, []);

  // console.log(dataUsers);

  // console.log(dataUsers)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    delete result.cancelled;

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

    console.log(result);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <StatusBar style="dark" />
      <View style={styles.appBar}>
        <View style={styles.choosePict}>
          {image && <Image source={{ uri: image }} style={styles.img} />}

          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Text style={{ fontFamily: "regular", fontSize: SIZES.small }}>
              Pilih foto
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputFields}>
          {/* Fields Name */}
          <View>
            <Text style={styles.fieldsTitle}>Nama</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Fields nama lengkap"
              value={dataUsers.name}
            />
          </View>

          {/* Fields Email */}
          <View>
            <Text style={styles.fieldsTitle}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Fields alamat email"
              value={dataUsers.email}
            />
          </View>

          {/* Fields Phone Number */}
          <View>
            <Text style={styles.fieldsTitle}>No HP</Text>
            <TextInput style={styles.textInput} placeholder="Fields nomor hp" />
          </View>

          <TouchableHighlight
            onPress={() => alert("hahaha")}
            underlayColor="#818cf8"
            style={styles.btnEdited}
          >
            <View>
              <Text style={{ color: "#fff", fontFamily: "bold" }}>Simpan</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
