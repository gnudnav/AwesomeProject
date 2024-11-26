import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navContainer}>
                <View style={{
                    marginTop: 40,
                }}>
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 16,
                        fontWeight: '500',
                        lineHeight: 20,
                        color: '#221F1F'
                    }}>PROFILE</Text>
                    <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 25 }}>
                        <Image source={require('../../assets/Images/imageAvatarProfile.png')} style={{ width: 39, height: 39 }} />
                        <View style={{ marginLeft: 25 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 22, color: '#000000' }}>Trần Minh Trí</Text>
                            <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 20, color: '#7F7F7F' }}>tranminhtri@gmail.com</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 20, color: '#7F7F7F', marginTop: 30 }}>
                        Chung
                    </Text>
                    <Image source={require('../../assets/Images/imageLine.png')} style={{ width: 327, marginTop: 10 }} />
                    <TouchableOpacity>
                        <Text style={styles.txt}>Chỉnh sửa thông tin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.txt}>Cẩm nang cây trồng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.txt}>Lịch sử giao dịch</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.txt}>Q & A</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 20, color: '#7F7F7F', marginTop: 30 }}>
                        Bảo mật và Điều khoản
                    </Text>
                    <Image source={require('../../assets/Images/imageLine.png')} style={{ width: 327, marginTop: 10 }} />
                    <TouchableOpacity>
                        <Text style={styles.txt}>Điều khoản và điều kiện</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.txt}>Chính sách và quyền riêng tư</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.txt, { color: 'red' }]}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    navContainer: {
        marginHorizontal: 33,
    },
    txt: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
        color: '#000000',
        marginTop: 20
    }
})