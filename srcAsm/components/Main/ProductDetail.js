import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { listDsDetail } from '../../Api/apiAsm'
import { useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'

const ProductDetail = ({ navigation }) => {
    const [productDetail, setProductDetail] = useState([])
    const [selected, setSelected] = useState(0)
    const router = useRoute();
    const { idProduct } = router.params;
    const dispatch = useDispatch();
    const handleCong = () => {
        setSelected(prev => prev + 1)
    }
    const handleTru = () => {
        if (selected > 0) {
            setSelected(prev => prev - 1)
        }
    }
    const handleAddtoCar = () => {
        productDetail.forEach(item => {
            const product = {
                id: item._id,
                name: item.name,
                price: item.price,
                quantity: selected,
                image: item.image,
            };
            dispatch(addToCart(product));
        });
        Alert.alert('Thông báo', 'Đã thêm vào giỏ hàng thành công')
    }
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price);
    };

    const fetchProductDetail = async (id) => {
        try {
            const response = await listDsDetail(id)
            setProductDetail(response.listDsDetail)
            console.log("listDsByDetail: " + JSON.stringify(response));
        } catch (error) {
            console.log("Kết nối detail thất bại", error);
        }
    }

    useEffect(() => {
        fetchProductDetail(idProduct)
    }, [idProduct])

    return (
        <View style={styles.container}>
            {/* Header cố định */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/Images/iconBackType.png')} style={styles.iconBackType} />
                </TouchableOpacity>
                <Text style={styles.txtName}>Chi tiết sản phẩm</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Image source={require('../../assets/Images/iconCartType.png')} style={styles.iconCartType} />
                </TouchableOpacity>
            </View>

            {/* Nội dung chi tiết sản phẩm cuộn được */}
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                {productDetail.map((item) => (
                    <View key={item._id}>
                        <View style={styles.backgroudImage}>
                            <Image source={{ uri: item.image }} style={styles.imageProduct} />
                        </View>
                        <View style={styles.body}>
                            <View style={styles.customId}>
                                <TouchableOpacity style={styles.boderId}>
                                    <Text style={styles.txtId}>{item.idTypeProduct?.name}</Text>
                                </TouchableOpacity>
                                {
                                    item.idCategory && item.idCategory.name && (
                                        <TouchableOpacity style={styles.boderId}>
                                            <Text style={styles.txtId}>{item.idCategory?.name}</Text>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                            <View style={styles.viewPrice}>
                                <Text style={styles.txtPrice}>
                                    {formatPrice(item.price)}đ
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.sectionTitle}>Chi tiết sản phẩm</Text>
                                <Image source={require('../../assets/Images/LineBold.png')} style={styles.allLine} />
                            </View>
                            <View style={styles.customProduct}>
                                <Text style={styles.txt}>Kích cỡ</Text>
                                <Text style={styles.txt}>Nhỏ</Text>
                            </View>
                            <Image source={require('../../assets/Images/LineLight.png')} style={styles.allLine} />
                            <View style={styles.customProduct}>
                                <Text style={styles.txt}>Xuất xứ</Text>
                                <Text style={styles.txt}>{item.origin}</Text>
                            </View>
                            <Image source={require('../../assets/Images/LineLight.png')} style={styles.allLine} />
                            <View style={styles.customProduct}>
                                <Text style={styles.txt}>Tình trạng</Text>
                                <Text style={styles.txtGreen}>Còn {item.status} sp</Text>
                            </View>
                            <Image source={require('../../assets/Images/LineLight.png')} style={styles.allLine} />
                            <View>
                                <Text style={styles.sectionTitle}>Mô tả sản phẩm</Text>
                                <Image source={require('../../assets/Images/LineBold.png')} style={styles.allLine} />
                                <Text style={styles.mota}>
                                    Panse mang một vẻ đẹp ngọt ngào, đằm thắm nhưng không kém phần rực rỡ mà không phải loài hoa nào cũng có.
                                    Với những cánh hoa mềm mại, màu sắc tươi tắn và đa dạng, Panse luôn thu hút ánh nhìn của mọi người mỗi khi xuất hiện. Không chỉ đẹp về hình thức, hoa Panse còn tượng trưng cho sự duyên dáng, tinh tế và một tình yêu vĩnh cửu, khắc sâu trong lòng người yêu hoa.
                                    {'\n\n'}
                                    Điều đặc biệt ở Panse chính là khả năng thích nghi với nhiều môi trường khác nhau, từ những khu vườn nhỏ xinh cho đến những bồn hoa rộng lớn,
                                    Panse luôn làm cho không gian xung quanh trở nên sinh động, tràn đầy sức sống.
                                    Mỗi bông hoa là một tác phẩm nghệ thuật, nhẹ nhàng nhưng lại có thể làm bừng sáng cả một khu vườn.
                                    Chính vì vậy, Panse không chỉ là loài hoa trang trí đơn thuần, mà còn mang ý nghĩa sâu sắc trong việc thể hiện tình yêu thương, sự trân trọng và niềm hy vọng                                </Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={{ marginHorizontal: 30, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 20, color: '#000000' }}>Đã chọn {selected} sản phẩm</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 20, color: '#000000' }}>Tạm tính</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={handleTru}>
                            <Image source={require('../../assets/Images/iconTru.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 20, color: '#000000', marginLeft: 20, marginRight: 20 }}>
                                {selected}
                            </Text>
                        </View>
                        <TouchableOpacity onPress={handleCong}>
                            <Image source={require('../../assets/Images/iconCong.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: '500', lineHeight: 34, color: '#221F1F' }}>{formatPrice(250000 * selected)}đ</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={[styles.purchaseButton, selected == 0 && styles.purchaseButton1]}
                    disabled={selected == 0}
                    onPress={handleAddtoCar}>
                    <Text style={styles.purchaseText}>CHỌN MUA</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetail

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
    scrollContainer: {
        flex: 1,
    },
    backgroudImage: {
        backgroundColor: '#F6F6F6',
        marginTop: 20,
        paddingTop: 10,
    },
    imageProduct: {
        width: 233,
        height: 260,
        alignSelf: 'center',
    },
    body: {
        marginTop: 15,
        paddingHorizontal: 50,
    },
    customId: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    boderId: {
        backgroundColor: '#009245',
        borderRadius: 4,
        padding: 5,
        marginRight: 10,
    },
    txtId: {
        color: '#FFFFFF',
    },
    viewPrice: {
        marginTop: 15,
    },
    txtPrice: {
        fontSize: 24,
        fontWeight: '500',
        color: '#007537',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 15,
        color: '#3A3A3A',
    },
    customProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    mota: {
        marginTop: 10,
        color: '#221F1F',
    },
    purchaseButton: {
        backgroundColor: '#007537',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginBottom: 20,
        borderRadius: 10
    },
    purchaseButton1: {
        backgroundColor: '#ABABAB',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginBottom: 20,
        borderRadius: 10
    },
    purchaseText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    txt: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#3A3A3A'
    },
    txtGreen: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#007537'
    },
    allLine: {
        width: 295
    }
})
