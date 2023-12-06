import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const InfoGunung = () => {
  const [img, setImg] = useState(require('../../../assets/gunung/gunung-1.png'));
  const [desc, setDesc] = useState({
    par1: 'Gunung Ungaran memiliki ketinggian sekitar 2.050 mdpl, dan termasuk ke dalam Gunung Berapi namun kondisinya sekarang sedang tidak aktif.',
    par2: 'Gunung Ungaran juga memiliki sumber mata air panas, maka tak heran jika di sekitar Gunung Ungaran banyak terdapat pemandian air panas.'
  })
  const [fasilitas, setFasilitas] = useState(['Area Parkir', 'Warung', 'Toilet', 'Pusat Informasi'])
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {/* <Text>InfoGunung</Text> */}
      <Image 
        source={img}
        style={{width: "100%", height: 300}}
      />
      <View style={styles.contentWrapper}>
          {/* Title */}
          <View style={styles.title}>
            <Text style={styles.titleStyle}>Gunung Ungaran</Text>
          </View>

          {/* SubTitle */}
          <View style={styles.subtitle}>
            <Text style={styles.subtitleStyle}>via Basecamp Mawar</Text>
          </View>

          {/* Location n Peak */}
          <View style={styles.dataGunung}>
            <View style={styles.location}>
              <Image 
                source={require('../../../assets/icons/location.png')}
                style={{height: 25, width: 25, tintColor: '#f43f5e'}}
              />
              <Text style={{ fontFamily: 'regular' }}>Ungaran, Semarang</Text>
            </View>
            <View style={styles.peak}>
              <Image 
                source={require('../../../assets/icons/mount.png')}
                style={{width: 28, height: 28, tintColor: '#3b82f6'}}
              />
              <Text style={{ fontFamily: 'regular' }}>2.050 mdpl</Text>
            </View>
          </View>

          {/* Desc */}
          <View style={styles.description}>
            <Text style={styles.textDescription}>{desc.par1}</Text>
            <Text style={styles.textDescription}>{desc.par2}</Text>
            <Text style={[styles.textDescription, {fontFamily: 'bold', marginTop: 5}]}>
              Fasilitas:
            </Text>
            {fasilitas.map((items, idx) => (
              <View key={idx}>
                <Text style={styles.textDescription}>- {items}</Text>
              </View>
            ))}
          </View>

          {/* Button Booking */}
          <View style={styles.btnBooking}>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate('InfoBooking')
              }}
              style={{ 
                backgroundColor: "#6366f1",
                paddingVertical: 13,
                width: 140,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100 / 2,
                marginTop: 25,
              }}
              underlayColor={"blue"}
            >
              <Text style={{ color: '#fff'}}>Booking Now</Text>
            </TouchableHighlight>
          </View>
      </View>
    </View>
  )
}

export default InfoGunung

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative'
  },
  contentWrapper: {
    backgroundColor: '#fff',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30, 
    paddingVertical: 20,
    position: 'absolute',
    bottom: 0, 
    height: 580
  },
  title: {
    marginHorizontal: 20,
    // borderWidth: 1
  },
  titleStyle: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'bold'
  },
  subtitle: {
    // borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 5
  },
  subtitleStyle: {
    color: '#a3a3a3',
    fontSize: 16,
    fontFamily: 'regular'
  },
  dataGunung: {
    flexDirection: 'row',
    gap: 20,
    marginHorizontal: 20,
    marginTop: 15
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    // borderWidth: 1
  },
  peak: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    // borderWidth: 1
  },
  description: {
    marginHorizontal: 20, 
    gap: 7,
    marginTop: 22
  },
  btnBooking: {
    display: 'flex',
    marginHorizontal: 20,
    width: 120,
    justifyContent: 'center'
  },
  textDescription: {
    fontSize: 16,
    fontFamily: 'regular'
  }
})