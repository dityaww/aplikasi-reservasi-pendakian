import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./header.style";
import { SIZES } from "../../constants/theme";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.headerContent}>
          <Text style={[styles.setTextcolor, { fontFamily: "regular" }]}>
            Welcome Back
          </Text>
          <Text
            style={[
              styles.setTextcolor,
              { fontFamily: "bold", fontSize: SIZES.xLarge },
            ]}
          >
            Aditya
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
            }}
            style={styles.img}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
