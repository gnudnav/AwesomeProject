import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { listProductByType } from '../../Api/apiAsm'
const Home = ({ navigation }) => {
    const [products, setProducts] = useState([])
    const [products1, setProducts1] = useState([])
    const [products2, setProducts2] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedId, setSelectedId] = useState("")
    const handleSelected = (idProduct) => {
        setSelectedId(idProduct)
        console.log(selectedId);
        navigation.navigate("ProductDetail", { idProduct: idProduct })
    }
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price);
    };
    //cây trồng
    const fetchProducts = async () => {
        try {
            const response = await listProductByType("Cây trồng");
            setProducts(response.product)
        } catch (error) {
            console.log("Lỗi khi gọi API", error);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={(() => handleSelected(item._id))}>
                <Image source={{ uri: item.image }} style={styles.imgItemImage} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemIdCate}>{item.idCategory?.name}</Text>
                <Text style={styles.itemPrice}>{formatPrice(item.price)} đ</Text>
            </TouchableOpacity>
        )
    }
    //chậu cây trồng
    const fetchProducts1 = async () => {
        try {
            const response = await listProductByType("Chậu cây trồng");
            setProducts1(response.product)
        } catch (error) {
            console.log("Lỗi khi gọi API", error);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts1();
    }, []);
    const renderItem1 = ({ item }) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={(() => handleSelected(item._id))}>
                <Image source={{ uri: item.image }} style={styles.imgItemImage} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{formatPrice(item.price)} đ</Text>
            </TouchableOpacity>
        )
    }
    //cây trồng
    const fetchProducts2 = async () => {
        try {
            const response = await listProductByType("Phụ kiện chăm sóc");
            setProducts2(response.product)
        } catch (error) {
            console.log("Lỗi khi gọi API", error);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts2();
    }, []);
    const renderItem2 = ({ item }) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={(() => handleSelected(item._id))}>
                <Image source={{ uri: item.image }} style={styles.imgItemImage} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{formatPrice(item.price)} đ</Text>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <View style={styles.customHeader}>
                    <View>
                        <Text style={styles.txt1}>Planta - tỏa sáng</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Image source={require('../../assets/Images/iconCart.png')}
                            style={styles.iconCart} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={require('../../assets/Images/imgHomeBackground.png')}
                        style={styles.imgHomebackGorund} />
                </View>
                <View style={styles.customTxt2}>
                    <Text style={styles.txt2}>
                        không gian nhà bạn
                    </Text>
                </View>
                <TouchableOpacity style={styles.customRow}>
                    <View>
                        <Text style={styles.txtNewProduct}>Xem hàng mới về</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/Images/iconNewProduct.png')}
                            style={styles.imgNewProduct} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyContainer}>
                    <View style={styles.viewTypeProduct}>
                        <Text style={styles.txtTypeProduct}>Cây trồng</Text>
                    </View>
                    <View>
                        {loading ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                        ) : (
                            <FlatList
                                data={products}
                                keyExtractor={(itemm) => itemm._id.toString()}
                                renderItem={renderItem}
                                numColumns={2}
                                // nestedScrollEnabled={true}
                                scrollEnabled={false}

                            />
                        )}
                    </View>
                    <TouchableOpacity style={styles.customXemThem} onPress={() => navigation.navigate("CayTrongDetail")}>
                        <Text style={styles.txtXemThem}>Xem thêm cây trồng</Text>
                    </TouchableOpacity>
                    <View style={styles.viewTypeProduct}>
                        <Text style={styles.txtTypeProduct}>Chậu cây trồng</Text>
                    </View>
                    <View>
                        {loading ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                        ) : (
                            <FlatList
                                data={products1}
                                keyExtractor={(itemm) => itemm._id.toString()}
                                renderItem={renderItem1}
                                numColumns={2}
                                // nestedScrollEnabled={true}
                                scrollEnabled={false}

                            />
                        )}
                    </View>
                    <TouchableOpacity style={styles.customXemThem} onPress={() => navigation.navigate("ChauCayTrongDetail")}>
                        <Text style={styles.txtXemThem}>Xem thêm chậu cây trồng</Text>
                    </TouchableOpacity>
                    <View style={styles.viewTypeProduct}>
                        <Text style={styles.txtTypeProduct}>Phụ kiện chăm sóc</Text>
                    </View>
                    <View>
                        {loading ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                        ) : (
                            <FlatList
                                data={products2}
                                keyExtractor={(itemm) => itemm._id.toString()}
                                renderItem={renderItem2}
                                numColumns={2}
                                // nestedScrollEnabled={true}
                                scrollEnabled={false}
                            />
                        )}
                    </View>
                    <TouchableOpacity style={styles.customXemThem} onPress={() => navigation.navigate("PhuKienDetail")}>
                        <Text style={styles.txtXemThem}>Xem thêm phụ kiện </Text>
                    </TouchableOpacity>
                    <View style={styles.viewTypeProduct}>
                        <Text style={styles.txtTypeProduct}>Combo chăm sóc (mới)</Text>
                    </View>
                    <View style={styles.imgNewCombo}>
                        <Image source={require('../../assets/Images/imgCombo.png')}
                            style={styles.imgCombo} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#F6F6F6',
        // backgroundColor: 'red',
    },
    customHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 20
    },
    txt1: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 37,
        color: '#221F1F'
    },
    iconCart: {
        width: 40,
        height: 38,

    },
    customRow: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 110,
        left: 20
    },
    txt2: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 37,
        color: '#221F1F'
    },
    customTxt2: {
        position: 'absolute',
        top: 60,
        left: 20
    },
    imgHomebackGorund: {
        width: '100%',
        height: 205
    },
    txtNewProduct: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
        color: '#007537'
    },
    imgNewProduct: {
        marginLeft: 5,
        width: 24,
        height: 24
    },
    body: {
        backgroundColor: 'white',
    },
    bodyContainer: {
        marginHorizontal: 20
    },
    viewTypeProduct: {
        marginTop: 25,
    },
    txtTypeProduct: {
        fontSize: 24,
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 34,
        color: '#221F1F'
    },
    itemContainer: {
        marginRight: 45
    },
    imgItemImage: {
        width: 155,
        height: 134,
        marginTop: 15,
        // backgroundColor: 'red'
    },
    itemName: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
        color: '#221F1F'
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
        color: '#007537'
    },
    itemIdCate: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#7D7B7B'
    },
    customXemThem: {
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'flex-end',
        marginRight: 10
    },
    txtXemThem: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        color: '#221F1F',
        textDecorationLine: 'underline'
    },
    imgNewCombo: {
        marginTop: 20
    },
    imgCombo: {
        width: 355,
        height: 134,
        marginBottom: 50
    }
})
