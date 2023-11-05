import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableHighlight } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import  styles  from './register.style'
import { Link } from '@react-navigation/native';

const Register = () => {
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
                        resizeMode='cover'
                        />
                    </View>
                    <Text style={styles.title}>Register your account</Text>
                    <View style={[styles.textInput, isFocused === 'username' && styles.focusedTextInput]}>
                        <TextInput 
                        placeholder={"masukkan username"} 
                        style={{fontFamily: 'regular', fontSize: 16}}
                        keyboardAppearance={'dark'} 
                        onFocus={() => handleFocus('username')}
                        onBlur={() => handleFocus('')}
                        />
                    </View>
                    
                    <View style={[styles.textInput, isFocused === 'password' && styles.focusedTextInput]}>
                        <TextInput 
                        placeholder={"masukkan password"} 
                        keyboardAppearance={'dark'} 
                        secureTextEntry={true}
                        style={{fontFamily: 'regular', fontSize: 16 }}
                        onFocus={() => handleFocus('password')}
                        onBlur={() => handleFocus('')}
                        />
                    </View>
                </View>
                <View style={styles.submit}>
                    <TouchableHighlight
                        onPress={() => alert("hahaha")}
                        underlayColor="#818cf8"
                        style={styles.btnSignIn}
                        >
                        <View>
                        <Text style={{ color: "#fff", fontFamily: "bold" }}>Sign Up</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.link}>
                        <Text style={{fontFamily: 'regular', fontSize: 15}}>You have account?</Text>
                        <Link to={{screen: 'Login'}} style={{color: '#818cf8', fontFamily: 'bold', fontSize: 15}}>
                        Let's Sign In
                        </Link>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Register

