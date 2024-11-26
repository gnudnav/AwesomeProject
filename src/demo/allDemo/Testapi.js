import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';

const Testapi = () => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [afterUser, setAfterUser] = useState('')
    const [afterPass, setAfterPass] = useState('')
    const handleLogin = () => {
        if (user == "" && pass == "") {
            Alert.alert("Hình như bạn chưa nhập user và pass kìa")
        } else if (user == "") {
            Alert.alert("Bạn chưa nhập user kìa")
        } else if (pass == "") {
            Alert.alert("Bạn chưa nhập pass kìa")
        } else {
            Alert.alert("Thông báo, Bạn đã nhấn vào nút đăng nhập")
            setAfterPass(pass)
            setAfterUser(user)
        }
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerApp}>
                <View style={styles.loginWrapper}>
                    <Text style={styles.loginTitle}>Login</Text>
                </View>
                <View style={styles.inputGroupContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Username'
                            placeholderTextColor="gray"
                            style={styles.textInput}
                            secureTextEntry
                            onChangeText={setUser}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Password'
                            placeholderTextColor="gray"
                            style={styles.textInput}
                            secureTextEntry // For password field
                            onChangeText={setPass}
                        />
                    </View>
                </View>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>User:{afterUser} </Text>
                </View>
                <View>
                    <Text>Pass: {afterPass} </Text>
                </View>
            </View>
        </View>
    );
};

export default Testapi;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    containerApp: {
        marginHorizontal: 20,
        alignItems: 'center',
    },
    loginWrapper: {
        marginTop: 50,
    },
    loginTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    inputGroupContainer: {
        marginTop: 30,
        width: '100%', // Ensure full width
        justifyContent: 'space-between',
    },
    inputContainer: {
        marginBottom: 15, // Space between input fields
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    textInput: {
        height: 40,
        paddingHorizontal: 10,
    },
    buttonGroup: {
        marginTop: 20,
        width: '100%', // Ensure full width for the button
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF', // Button color
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
