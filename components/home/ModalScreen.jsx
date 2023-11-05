import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ModalScreen = ({navigation}) => {
    return(
      <View style={styles.container}>
        <Text>This is Modal</Text>
      </View>
    )
}

export default ModalScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
})
