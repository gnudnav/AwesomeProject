import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerr}>
                <View style={styles.titleLogin}>
                    <Text style={styles.txtLogin}>Login</Text>
                </View>
                <View style={styles.boderFortxt}>
                    <TextInput placeholder='Nhập tài khoản' />
                </View>
                <View style={styles.boderFortxt}>
                    <TextInput placeholder='Nhập mật khẩu' />
                </View>
                <View style={styles.viewDangNhap}>
                    <TouchableOpacity style={styles.btnDangNhap}>
                        <Text style={styles.txtDangNhap}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewDangKy}>
                    <TouchableOpacity style={styles.btnDangKy}>
                        <Text style={styles.txtDangKy}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    }, containerr: {
        marginHorizontal: 40,
        marginTop: 40
    },
    titleLogin: { textAlign: 'center', alignSelf: 'center', marginBottom: 50 },
    txtLogin: { fontSize: 20, fontWeight: 'bold', color: 'black' },
    boderFortxt: {
        borderColor: 'black',
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 7,
        marginTop: 20
    },
    viewDangNhap: { marginTop: 50, alignItems: 'center' },
    btnDangNhap: { width: '70%', height: 40, backgroundColor: 'green', borderRadius: 20, },
    txtDangNhap: { textAlign: 'center', lineHeight: 36, color: 'white', fontSize: 18, fontWeight: 'bold' },
    viewDangKy: { marginTop: 10, alignItems: 'center' },
    txtDangKy: { textAlign: 'center', lineHeight: 36, color: 'black', fontSize: 15, fontWeight: '400' }

})