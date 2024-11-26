import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Cart = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/Images/iconBackType.png')} style={styles.iconBackType} />
                </TouchableOpacity>
                <Text style={styles.txtName}>Giỏ hàng</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Image source={require('../../assets/Images/iconTrash.png')} style={styles.iconCartType} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        paddingBottom: 10,
    }, iconBackType: {
        width: 24,
        height: 24,
    },
    iconCartType: {
        width: 20,
        height: 20,
    },
    txtName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#221F1F',
    },
})