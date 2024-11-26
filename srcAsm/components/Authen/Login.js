import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { loginUser } from '../../Api/apiAsm';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [checkMiss, setCheckMiss] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [isEmailFocused, setIsEmailFocused] = useState(false)
    const [isPassFocused, setIsPassFocused] = useState(false)
    const handleRegister = () => {
        navigation.navigate('Register')
    }
    const handleLogin = async () => {
        if (email.trim() === '' || password.trim() === '') {
            Alert.alert("Bạn cần nhật đầy đủ thông tin")
            return
        }
        const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!checkEmail.test(email)) {
            Alert.alert("Email ko hợp lệ. Vui lòng nhập lại")
            return
        }
        try {
            const data = await loginUser({ email, password })
            console.log(data);
            if (data.status) {
                Alert.alert("Đăng nhập thành công")
                navigation.navigate("Main")
            }
        } catch (error) {
            if (error.response) {
                console.log("Error Login", error.response.data);
                setErrorMessage('Invalid email or Password. Try again !');
            } else {
                console.log("Error Login", error);
            }
        }
    }
    const handleEmailChange = (text) => {
        setEmail(text);
        if (errorMessage) setErrorMessage('')
    }
    const handlePasswordChange = (text) => {
        setPassword(text);
        if (errorMessage) setErrorMessage('')
    }
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Images/imgBackgroudLogin.png')}
                style={styles.imgLogin} />
            <View style={styles.body}>
                <View style={styles.viewTitleWelcome}>
                    <Text style={styles.titleWelcome}>
                        Chào mừng bạn</Text>
                </View>
                <View>
                    <Text style={styles.titleLogin}>
                        Đăng nhập tài khoản</Text>
                </View>
                <View style={[styles.borderEmail, isEmailFocused && styles.focusedBorder]}>
                    <TextInput
                        placeholder='Nhập email hoặc số điện thoại'
                        value={email}
                        onChangeText={handleEmailChange}
                        style={styles.textInput}
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={() => setIsEmailFocused(false)} />
                </View>
                <View style={styles.customViewPass}>
                    <View style={[styles.borderPass, isPassFocused && styles.focusedBorder]}>
                        <TextInput
                            placeholder='Mật khẩu'
                            value={password}
                            onChangeText={handlePasswordChange}
                            secureTextEntry={!showPass}
                            style={styles.textInput}
                            onFocus={() => setIsPassFocused(true)}
                            onBlur={() => setIsPassFocused(false)} />
                    </View>
                    <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                        <Image
                            source={showPass ? require('../../assets/Images/iconShowPass.png') : require('../../assets/Images/iconNotShowPass.png')}
                            style={styles.iconNotShowPass} />
                    </TouchableOpacity>
                </View>
                {
                    errorMessage ? <Text style={styles.txtErrorMessage}>{errorMessage}</Text> : null
                }
                <View style={styles.customUnderPass}>
                    <TouchableOpacity style={styles.customCheck} onPress={() => setCheckMiss(!checkMiss)}>
                        <View>
                            <Image source={checkMiss ? require('../../assets/Images/iconCheckGreen.png') : require('../../assets/Images/iconCheckBlack.png')}
                                style={styles.imgIconCheckGreen} />
                        </View>
                        <View>
                            <Text style={[checkMiss ? styles.txtMissBlack : styles.txtMissGreen]}>Nhớ tài khoản</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.txtForgetPass}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
                        <Text style={styles.txtLogin}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.customIconOr}>
                    <Image source={require('../../assets/Images/iconOr.png')} />
                </View>
                <View style={styles.customIcon}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/Images/iconGoogle.png')}
                            style={styles.iconGoogleAndFace} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/Images/iconFace.png')}
                            style={styles.iconGoogleAndFace} />
                    </TouchableOpacity>
                </View>
                <View style={styles.customeUnder}>
                    <View>
                        <Text style={styles.txtNot}>Bạn không có tài khoản</Text>
                    </View>
                    <TouchableOpacity onPress={handleRegister}>
                        <Text style={styles.txtNewTk}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imgLogin: {
        width: '100%',
        height: 340,
        marginTop: -60
    },
    body: {
        marginHorizontal: 20,
        alignItems: 'center'
    },
    titleWelcome: {
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 45,
        color: 'black'
    },
    titleLogin: {
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 27,
        color: 'black'
    },
    borderEmail: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#8B8B8B',
        width: 300,
        height: 46,
        marginTop: 20
    },
    borderPass: {
        marginTop: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#8B8B8B',
        width: 300,
        height: 46
    },
    textInput: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: '#8B8B8B',
        paddingLeft: 15
    },
    customViewPass: {
        flexDirection: 'row',
    },
    iconNotShowPass: {
        position: 'absolute',
        right: 10,
        top: 24,
        width: 22,
        height: 18,
    },
    customUnderPass: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
        marginTop: 10
    },
    customCheck: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgIconCheckGreen: {
        width: 18,
        height: 18
    },
    txtMissBlack: {
        marginLeft: 5,
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 16.5,
        color: '#949090'
    },
    txtMissGreen: {
        marginLeft: 5,
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 16.5,
        color: '#007537'
    },
    txtForgetPass: {
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 16.5,
        color: '#007537'
    },
    btnLogin: {
        width: 300,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#007537',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    txtLogin: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        color: '#FFFFFF'
    },
    customIconOr: {
        marginTop: 25,
        marginBottom: 35,
        width: 289,
        height: 18
    },
    customIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-between'
    },
    iconGoogleAndFace: {
        width: 32,
        height: 32
    },
    customeUnder: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 200,
        justifyContent: 'space-between',
        marginTop: 20
    },
    txtNot: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: 'black'
    },
    txtNewTk: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: '#009245'
    },
    txtErrorMessage: {
        fontSize: 11,
        fontWeight: "600",
        lineHeight: 16.5,
        color: '#CE0000',
        marginLeft: -100
    },
    focusedBorder: {
        borderColor: '#007537'
    }
})