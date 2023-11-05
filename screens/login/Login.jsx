// import { Link } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './login.style'
import { Link } from '@react-navigation/native';

const Login = () => {
    const [isFocused, SetIsFocused] = useState(null)

    const handleFocus = (id) => {
        SetIsFocused(id)
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.fields}>
                    <View style={styles.logo}>
                        <Image
                        source={require('../../assets/mount-icons.png')}
                        style={{width: 163, height: 177}}
                        />
                    </View>
                    <Text style={styles.title}>Login to your account</Text>
                    <View style={[styles.textInput, isFocused === 'username' && styles.focusedTextInput]}>
                        <TextInput 
                        label={'username'}
                        placeholder={"masukkan username"} 
                        keyboardAppearance={'dark'} 
                        style={[{fontFamily: 'regular', fontSize: 16 }]}
                        onFocus={() => handleFocus('username')}
                        onBlur={() => handleFocus('')}
                        />
                    </View>
                    
                    <View style={[styles.textInput, isFocused === 'password' && styles.focusedTextInput ]}>
                        <TextInput 
                        label={'password'}
                        placeholder={"masukkan password"} 
                        keyboardAppearance={'dark'} 
                        onFocus={() => handleFocus('password')}
                        onBlur={() => handleFocus('')}
                        secureTextEntry
                        style={[{fontFamily: 'regular', fontSize: 16 }]}/>
                    </View>
                </View>
                <View style={styles.submit}>
                    <TouchableHighlight
                        onPress={() => alert("hahaha")}
                        underlayColor="#818cf8"
                        style={styles.btnSignIn}
                        >
                        <View>
                        <Text style={{ color: "#fff", fontFamily: "bold" }}>Sign In</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.link}>
                        <Text style={{fontFamily: 'regular', fontSize: 15}}>Dont have account?</Text>
                        <Link to={{screen: 'Register'}} style={{color: '#818cf8', fontFamily: 'bold', fontSize: 15}}>
                        Register Now
                            {/* <Text style={{color: '#818cf8', fontFamily: 'bold', fontSize: 15}}></Text> */}
                        </Link>
                    </View>
                </View>
            </View>
            {/* <View>
                <Image source={{ uri: `${mount}`}} style={{width: 200, height: 200}}/>
            </View> */}
            
        </SafeAreaView>
    )
}

export default Login

