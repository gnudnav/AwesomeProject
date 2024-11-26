import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { loginUser, registerUser } from '../../Api/apiAsm';


const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [isEmailFocused, setIsEmailFocused] = useState(false)
    const [isPassFocused, setIsPassFocused] = useState(false)
    const [isPhoneFocused, setIsPhoneFocused] = useState(false)
    const [isNameFocused, setIsNameFocused] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorPhone, setErrorPhone] = useState('')
    const [errorPass, setErrorPass] = useState('')
    
    const handleRegister = async () => {
        // if (email.trim() === '' || password.trim() === '' || name.trim() == "" || phone.trim() == "") {
        //     Alert.alert("Bạn cần nhật đầy đủ thông tin")
        //     return
        // }
        const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() == "") {
            setErrorEmail('Email be left blank. ')
        } else if (!checkEmail.test(email)) {
            setErrorEmail('Email is not in correct format. ')
        }
        if (name.trim() == "") {
            setErrorName('Name cannot be left blank. ')
        }
        if (password.trim() == "") {
            setErrorPass('Password cannot be left blank. ')
        }
        const checkPhone = /^0[0-9]{9,10}$/
        if (phone.trim() == "") {
            setErrorPhone('Phone cannot be left blank. ')
        } else if (!checkPhone.test(phone)) {
            setErrorPhone('Phone is not in correct format. ')
        }
        try {
            const data = await registerUser({ email, password, name, phone })
            console.log(data);
            if (data.status) {
                Alert.alert("Đăng ký thành công")
                navigation.navigate('Login')
            }
        } catch (error) {
            if (error.response) {
                console.log("Error Register", error.response.data);
            } else {
                console.log("Error Register", error);
            }
        }
    }
    const handleEmailChange = (text) => {
        setEmail(text);
        if (errorEmail) setErrorEmail('')
    }
    const handlePasswordChange = (text) => {
        setPassword(text);
        if (errorPass) setErrorPass('')
    }
    const handleNameChange = (text) => {
        setName(text);
        if (errorName) setErrorName('')
    }
    const handlePhoneChange = (text) => {
        setPhone(text);
        if (errorPhone) setErrorPhone('')
    }
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Images/imgBackgroudLogin.png')}
                style={styles.imgLogin} />
            <View style={styles.body}>
                <View style={styles.viewTitleWelcome}>
                    <Text style={styles.titleWelcome}>
                        Đăng ký</Text>
                </View>
                <View>
                    <Text style={styles.titleLogin}>
                        Tạo tài khoản</Text>
                </View>
                <View style={[styles.borderEmail, isEmailFocused && styles.focusedBorder]}>
                    <TextInput
                        placeholder='E-mail'
                        value={email}
                        onChangeText={handleEmailChange}
                        style={styles.textInput}
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={() => setIsEmailFocused(false)} />
                </View>
                {
                    errorEmail ? <Text style={styles.txtErrorMessage}>{errorEmail}</Text> : null
                }
                <View style={[styles.borderName, isNameFocused && styles.focusedBorder]}>
                    <TextInput
                        placeholder='Họ tên'
                        value={name}
                        onChangeText={handleNameChange}
                        style={styles.textInput}
                        onFocus={() => setIsNameFocused(true)}
                        onBlur={() => setIsNameFocused(false)} />
                </View>
                {
                    errorName ? <Text style={styles.txtErrorMessage}>{errorName}</Text> : null
                }
                <View style={[styles.borderPhone, isPhoneFocused && styles.focusedBorder]}>
                    <TextInput
                        placeholder='Số điện thoại'
                        value={phone}
                        onChangeText={handlePhoneChange}
                        style={styles.textInput}
                        onFocus={() => setIsPhoneFocused(true)}
                        onBlur={() => setIsPhoneFocused(false)} />
                </View>
                {
                    errorPhone ? <Text style={styles.txtErrorMessage}>{errorPhone}</Text> : null
                }
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
                    errorPass ? <Text style={styles.txtErrorMessage}>{errorPass}</Text> : null
                }
                <View style={styles.moreTxt}>
                    <Text style={styles.txt1}>
                        Để đăng ký tài khoản, bạn đồng ý Terms &
                    </Text>
                    <View style={styles.customtxt}>
                        <Text style={styles.green}>
                            Conditions
                        </Text>
                        <Text style={styles.txt1}>and</Text>
                        <Text style={styles.green}>Privacy Policy</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnLogin} onPress={handleRegister}>
                        <Text style={styles.txtLogin}>Đăng ký</Text>
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
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.txtNewTk}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imgLogin: {
        width: '100%',
        height: 340,
        marginTop: -165
    },
    body: {
        marginHorizontal: 20,
        alignItems: 'center'
    },
    titleWelcome: {
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 45,
        color: 'black',
        marginTop: -30
    },
    titleLogin: {
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 27,
        color: 'black',
        marginTop: 10
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
    borderName: {
        marginTop: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#8B8B8B',
        width: 300,
        height: 46
    },
    borderPhone: {
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
    btnLogin: {
        width: 300,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#007537',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
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
        marginBottom: -10,
        alignSelf: 'flex-start',
        marginLeft: 40
    },
    focusedBorder: {
        borderColor: '#007537'
    },
    customtxt: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    moreTxt: {
        marginTop: 15,
        alignItems: 'center'
    },
    txt1: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: '00000'
    },
    green: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18,
        color: '#009245',
        textDecorationLine: 'underline'
    }
})