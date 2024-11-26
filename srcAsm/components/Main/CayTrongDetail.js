import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { listProductByType } from '../../Api/apiAsm';
import { listProductByCate } from '../../Api/apiAsm';
import ProductDetail from './ProductDetail';

const CayTrongDetail = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("Tất cả");
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price);
    };
    const handleProductDetail = (idProduct) => {
        navigation.navigate('ProductDetail', { idProduct: idProduct })
    }
    const fetchProducts = async (category) => {
        try {
            let response
            if (category === "Tất cả") {
                response = await listProductByType("Cây trồng")
                console.log(response);
                setProducts(response.product);
            } else if (category === "Hàng mới về") {
                response = await listProductByType("Cây trồng")
                console.log(response);
                setProducts(response.product);
            } else if (category === "Ưa sáng") {
                response = await listProductByCate("Ưa sáng")
                console.log(response);
                setProducts(response.checkProduct);
            } else if (category === "Ưa bóng") {
                response = await listProductByCate("Ưa bóng")
                console.log(response);

                setProducts(response.checkProduct);
            }
        } catch (error) {
            console.log("Lỗi khi gọi API", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(selectedCategory || "Tất cả");
    }, [selectedCategory]);
    // const handleProductDetail
    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity style={styles.itemContainer} onPress={() => handleProductDetail(item._id)} >
                    <Image source={{ uri: item.image }} style={styles.imgItemImage} />
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemIdCate}>{item.idCategory?.name}</Text>
                    <Text style={styles.itemPrice}>{formatPrice(item.price)} đ</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
        fetchProducts(category);
    };

    return (
        <View style={styles.container}>
            <View style={styles.navContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/Images/iconBackType.png')} style={styles.imgBackType} />
                    </TouchableOpacity>
                    <Text style={styles.txtTieuDe}>CÂY TRỒNG</Text>
                    <TouchableOpacity>
                        <Image source={require('../../assets/Images/iconCartType.png')} style={styles.imgCartType} />
                    </TouchableOpacity>
                </View>
                <View style={styles.danhMuc}>
                    <View style={styles.row}>
                        {["Tất cả", "Hàng mới về", "Ưa sáng", "Ưa bóng"].map((category) => (
                            <TouchableOpacity
                                key={category}
                                style={[
                                    styles.customBorder,
                                    {
                                        backgroundColor: selectedCategory === category ? '#009245' : 'white',
                                    },
                                ]}
                                onPress={() => handleCategoryPress(category)}
                            >
                                <Text style={[
                                    styles.customeCate,
                                    {
                                        color: selectedCategory === category ? '#FFFFFF' : '#7D7B7B',
                                    },
                                ]}>
                                    {selectedCategory === category ? ` ${category}` : category}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={{ marginTop: 10, paddingBottom: 215 }}>
                        {loading ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                        ) : products.length === 0 ? (
                            <Text style={styles.noDataText}>Không có sản phẩm nào!</Text>
                        ) : (
                            <FlatList
                                data={products}
                                keyExtractor={(item) => item._id.toString()}
                                renderItem={renderItem}
                                numColumns={2}
                                showsVerticalScrollIndicator={false}
                            />
                        )}
                    </View>
                </View>
            </View>


        </View>
    );
};

export default CayTrongDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    navContainer: {
        marginHorizontal: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        alignItems: 'center'
    },
    imgBackType: {
        width: 24,
        height: 24
    },
    imgCartType: {
        width: 20,
        height: 20
    },
    txtTieuDe: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        color: '#221F1F'
    },
    danhMuc: {
        marginTop: 40
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    customBorder: {
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    customeCate: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
    }, itemContainer: {
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
});
