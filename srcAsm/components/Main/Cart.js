import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, clearCart } from '../../redux/cartSlice'

const Cart = ({ navigation }) => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const [checkOut, setCheckOut] = useState(true)
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price);
    };
    const totalAmount = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/Images/iconBackType.png')} style={styles.iconBackType} />
                </TouchableOpacity>
                <Text style={styles.txtName}>Giỏ hàng</Text>
                <TouchableOpacity onPress={() => dispatch(clearCart())}>
                    <Image source={require('../../assets/Images/iconTrash.png')} style={styles.iconCartType} />
                </TouchableOpacity>
            </View>

            {/* Phần giỏ hàng có thể cuộn lên xuống */}
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}>
                {cartItems.map(item => {
                    const totalPrice = item.quantity * item.price; // Tính toán giá trị tổng
                    return (
                        <View key={item.id} style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => setCheckOut(!checkOut)}>
                                <Image source={checkOut ? require('../../assets/Images/iconNotCheckBox.png') : require('../../assets/Images/iconCheckBox.png')}
                                    style={{ width: 22, height: 22 }} />
                            </TouchableOpacity>
                            <Image source={{ uri: item.image }}
                                style={{ width: 77, height: 77, marginLeft: 20, borderRadius: 10 }} />
                            <View style={{ flex: 1, marginLeft: 10, marginLeft: 20, height: 77, justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 16, color: 'black', fontWeight: '500', lineHeight: 22 }}>{item.name}</Text>
                                <Text style={{ color: '#007537', fontSize: 16, fontWeight: '500', lineHeight: 22 }}>{formatPrice(totalPrice)}đ</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity >
                                        <Image source={require('../../assets/Images/iconTru.png')} style={{ width: 22, height: 22 }} />
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 20, color: '#000000', marginLeft: 10, marginRight: 10 }}>
                                            {item.quantity}

                                        </Text>
                                    </View>
                                    <TouchableOpacity >
                                        <Image source={require('../../assets/Images/iconCong.png')} style={{ width: 22, height: 22 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))} style={{ marginLeft: 30 }}>
                                        <Text style={{ color: 'black', textDecorationLine: 'underline' }}>Xóa</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>

            {/* Phần tổng ở dưới cùng */}
            <View style={styles.totalContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5, marginBottom: 10 }}>
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 20, color: 'black' }}>Tạm Tính</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 22, color: 'black' }}>{formatPrice(totalAmount)} đ</Text>
                    </View>
                </View>
                <TouchableOpacity
                    // style={[styles.purchaseButton, selected == 0 && styles.purchaseButton1]}
                    // disabled={selected == 0}
                    onPress={() => navigation.navigate('Payment')}
                >
                    <Text style={styles.purchaseText}>Tiến hành thanh toán</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Cart;

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
    },
    iconBackType: {
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
    totalContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    purchaseText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        backgroundColor: '#007537',
        paddingVertical: 15,
        textAlign: 'center',
        borderRadius: 8,
    },
})
