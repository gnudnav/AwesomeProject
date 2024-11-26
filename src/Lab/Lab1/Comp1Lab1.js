import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { registerUser } from './apiLab1';

const Comp1Lab1 = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const isBtnDis = email.trim() == "" || password.trim() == "" || name.trim() == "";
    const handleRegister = async () => {
        try {
            const data = await registerUser({ email, password, name });
            console.log(data);
            if (data.status === 'true') {
                Alert.alert('Đăng ký thành công')
                navigation.navigate('CompLogin')
            } else {
                Alert.alert('Đăng ký thất bại')
            }

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerMargin}>
                <View style={styles.body}>
                    <View style={styles.imgLogo}>
                        <Image source={require('../../Lab/assets/ImagesLab/imgLogoIcon.png')}
                            style={styles.img} />
                    </View>
                    <View style={styles.model}>
                        <Text style={styles.txt1}>Register</Text>
                    </View>
                    <View style={styles.txtInput}>
                        <TextInput placeholder='Email'
                            style={styles.textInput}
                            value={email}
                            onChangeText={setEmail} />
                    </View>
                    <View style={styles.txtInput} >
                        <TextInput placeholder='Password'
                            style={styles.textInput}
                            value={password}
                            onChangeText={setPassword} />
                    </View>
                    <View style={styles.txtInput}>
                        <TextInput placeholder='Date of Birth'
                            style={styles.textInput}
                            value={name}
                            onChangeText={setName} />
                    </View>
                    <View style={styles.moreText}>
                        <Text style={styles.moreAllText}>
                            By signing up, you agree to our
                        </Text>
                        <Text style={{ color: '#F77A55', fontWeight: '600', marginLeft: 3 }}>
                            Terms
                        </Text>
                        <Text style={styles.moreAllText}>
                            ,
                        </Text>
                        <Text style={{ color: '#F77A55', fontWeight: '600', marginRight: 3 }}>
                            Data Policy
                        </Text>
                        <Text style={styles.moreAllText}>
                            and
                        </Text>
                        <Text style={{ color: '#F77A55', fontWeight: '600', marginLeft: 3 }}>
                            Cookies Policy.
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={
                                [styles.viewBtnRegister,
                                isBtnDis && { backgroundColor: '#CBC9F6' }]
                            }
                            onPress={handleRegister}
                            disabled={isBtnDis}>
                            <Text style={styles.txtBtnRegister}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.viewBtnCancel}>
                            <Text style={styles.txtBtnCancel}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Comp1Lab1;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    containerMargin: {
        marginHorizontal: 40
    },
    imgLogo: {
        alignItems: 'center'
    },
    body: {
        marginTop: 30
    },
    img: {
        width: 120,
        height: 120
    },
    model: {
        marginTop: 20
    },
    txt1: {
        color: '#9292A2',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        textShadowColor: 'rgb(0,0,0,0.9)',
        textShadowOffset: { width: 1, height: 1.5 },
        textShadowRadius: 1
    },
    txtInput: {
        width: 295,
        height: 53,
        borderColor: "#EBEBF5",
        borderWidth: 2,
        borderRadius: 8,
        marginTop: 20,
        backgroundColor: '#EBEBF5',
    },
    textInput: {
        marginLeft: 20,
        borderRadius: 8,
        color: '#B8B8C7',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
    },
    moreText: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 20,
        flexWrap: 'wrap'
    },
    moreAllText: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '400',
        color: '#9292A2'
    },
    viewBtnRegister: {
        marginTop: 30,
        width: 295,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#4838D1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtBtnRegister: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: 56
    },
    viewBtnCancel: {
        marginTop: 20,
        width: 295,
        height: 56,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#4838D1',
        borderWidth: 2

    },
    txtBtnCancel: {
        color: '#4838D1',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        alignItems: 'center'
    }
});