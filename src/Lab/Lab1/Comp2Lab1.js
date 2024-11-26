import { Button, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Comp3Lab1 from './Comp3Lab1';
import { listCategory } from './apiLab1';
import { listProductByCateLab1 } from './apiLab1';
import Seeach from './Seeach';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home({ navigation }) {
    return (
        <ScrollView contentContainerStyle={[styles.container, { flexGrow: 1 }]}>
            <View>
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    width: '85%',
                    alignItems: 'center',
                    marginTop: 20
                }}>
                    <Image source={require('../../Lab/assets/ImagesLab/iconLogoApp.png')}
                        style={{ width: 165, height: 40 }} />
                    <Image source={require('../../Lab/assets/ImagesLab/iconSetting.png')}
                        style={{ width: 24, height: 24 }} />
                </View>
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    width: '85%',
                    alignItems: 'center',
                    marginTop: 60
                }}>
                    <Text style={{ color: '#010104', fontWeight: '500', fontSize: 16, lineHeight: 24 }}>Categories</Text>
                    <Text style={{ color: '#4838D1', fontSize: 14, fontWeight: '500', lineHeight: 21 }}>See more</Text>
                </View>
                <View style={{ width: '85%' }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <View style={styles.category}>
                                <Text style={styles.categoryText}>Art</Text>
                            </View>
                            <View style={styles.category}>
                                <Text style={styles.categoryText}>Business</Text>
                            </View>
                            <View style={styles.category}>
                                <Text style={styles.categoryText}>Comedy</Text>
                            </View>
                            <View style={styles.category}>
                                <Text style={styles.categoryText}>Drama</Text>
                            </View>
                            <View style={styles.category}>
                                <Text style={styles.categoryText}>Drama</Text>
                            </View>
                            <View style={styles.category}>
                                <Text style={styles.categoryText}>Drama</Text>
                            </View>
                            <View style={styles.category}>
                                <Text style={styles.categoryText}>Drama</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    width: '85%',
                    alignItems: 'center',
                    marginTop: 30
                }}>
                    <Text style={{ color: '#010104', fontWeight: '500', fontSize: 16, lineHeight: 24 }}>Recommended for you</Text>
                    <Text style={{ color: '#4838D1', fontSize: 14, fontWeight: '500', lineHeight: 21 }}>See more</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    width: '85%',
                    alignItems: 'center',
                }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Comp3Lab1')}>
                            <Image source={require('../../Lab/assets/ImagesLab/imgPoster1.png')}
                                style={{
                                    width: 200,
                                    height: 300,
                                    marginRight: 30
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Comp3Lab1')}>
                            <Image source={require('../../Lab/assets/ImagesLab/imgPoster2.png')}
                                style={{
                                    width: 200,
                                    height: 300
                                }} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    width: '85%',
                    alignItems: 'center',
                    marginTop: 20
                }}>
                    <Text style={{ color: '#010104', fontWeight: '500', fontSize: 16, lineHeight: 24 }}>Categories</Text>
                    <Text style={{ color: '#4838D1', fontSize: 14, fontWeight: '500', lineHeight: 21 }}>See more</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30, backgroundColor: '#F5F5FA', borderRadius: 12, padding: 10 }}>
                    <Image source={require('../../Lab/assets/ImagesLab/imgOfBestSell.png')}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 10
                        }} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 16, lineHeight: 24, marginTop: 5 }}>Ligh Mage</Text>
                        <Text style={{ color: '#6A6A8B', fontSize: 12, fontWeight: '400', lineHeight: 18, marginTop: 5 }}>Laurie Forest</Text>
                        <Image source={require('../../Lab/assets/ImagesLab/iconStar.png')} style={{ width: 132, height: 20, marginTop: 15 }} />
                        <Text style={{ color: '#6A6A8B', fontSize: 12, fontWeight: '400', lineHeight: 18 }}>1,000+ Listeners</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30, backgroundColor: '#F5F5FA', borderRadius: 12, padding: 10 }}>
                    <Image source={require('../../Lab/assets/ImagesLab/imgOfBestSell.png')}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 10
                        }} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 16, lineHeight: 24, marginTop: 5 }}>Ligh Mage</Text>
                        <Text style={{ color: '#6A6A8B', fontSize: 12, fontWeight: '400', lineHeight: 18, marginTop: 5 }}>Laurie Forest</Text>
                        <Image source={require('../../Lab/assets/ImagesLab/iconStar.png')} style={{ width: 132, height: 20, marginTop: 15 }} />
                        <Text style={{ color: '#6A6A8B', fontSize: 12, fontWeight: '400', lineHeight: 18 }}>1,000+ Listeners</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30, backgroundColor: '#F5F5FA', borderRadius: 12, padding: 10 }}>
                    <Image source={require('../../Lab/assets/ImagesLab/imgOfBestSell.png')}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 10
                        }} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 16, lineHeight: 24, marginTop: 5 }}>Ligh Mage</Text>
                        <Text style={{ color: '#6A6A8B', fontSize: 12, fontWeight: '400', lineHeight: 18, marginTop: 5 }}>Laurie Forest</Text>
                        <Image source={require('../../Lab/assets/ImagesLab/iconStar.png')} style={{ width: 132, height: 20, marginTop: 15 }} />
                        <Text style={{ color: '#6A6A8B', fontSize: 12, fontWeight: '400', lineHeight: 18 }}>1,000+ Listeners</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30, backgroundColor: '#F5F5FA', borderRadius: 12, padding: 10 }}>
                    <Image source={require('../../Lab/assets/ImagesLab/imgOfBestSell.png')}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 10
                        }} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 16, lineHeight: 24, marginTop: 5 }}>Ligh Mage</Text>
                        <Text style={{ color: '#6A6A8B', fontSize: 12, fontWeight: '400', lineHeight: 18, marginTop: 5 }}>Laurie Forest</Text>
                        <Image source={require('../../Lab/assets/ImagesLab/iconStar.png')} style={{ width: 132, height: 20, marginTop: 15 }} />
                        <Text style={{ color: '#6A6A8B', fontSize: 12, fontWeight: '400', lineHeight: 18 }}>1,000+ Listeners</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 30, backgroundColor: '#F5F5FA', borderRadius: 12, padding: 10 }}>
                    <Image source={require('../../Lab/assets/ImagesLab/imgOfBestSell.png')}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 10
                        }} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 16, lineHeight: 24, marginTop: 5 }}>Ligh Mage</Text>
                        <Text style={{ color: '#6A6A8B', fontSize: 12, fontWeight: '400', lineHeight: 18, marginTop: 5 }}>Laurie Forest</Text>
                        <Image source={require('../../Lab/assets/ImagesLab/iconStar.png')} style={{ width: 132, height: 20, marginTop: 15 }} />
                        <Text style={{ color: '#6A6A8B', fontSize: 12, fontWeight: '400', lineHeight: 18 }}>1,000+ Listeners</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
const Search = () => {
    const [category, setCategory] = useState([])
    const [listProduct, setListProduct] = useState([])
    const [selected, setSelected] = useState(1)

    const Category = async () => {
        try {
            const data = await listCategory()
            setCategory(data)
            console.log(data);
        } catch (error) {
            console.log("Lỗi khi gọi API", error);
        }
    }

    useEffect(() => {
        Category()
    }, [])

    const handleSelected = (idCate) => {
        setSelected(idCate)
    }

    const ProductByCate = async (id) => {
        try {
            const dataProduct = await listProductByCateLab1(id)
            console.log(id);

            setListProduct(dataProduct)
            console.log("dataProduct: ", dataProduct);
        } catch (error) {
            console.log("Lỗi khi gọi API", error);
        }
    }

    useEffect(() => {
        if (selected) {
            ProductByCate(selected)
        }
    }, [selected])

    // Render danh mục
    const renderItem = ({ item }) => {
        return (
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity
                    onPress={() => handleSelected(item.idCate)}
                    style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 10,
                        width: 90,
                        alignContent: 'center',
                        alignItems: 'center',
                        marginLeft: 20,
                    }}>
                    <Image source={{ uri: item.image }} style={{ width: 30, height: 30 }} />
                    <Text style={{ fontSize: 10 }}>
                        {item.nameCate}
                    </Text>
                    <Text>
                        {item.idCate}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderItem1 = ({ item }) => {
        return (
            <View>
                <View>
                    <Text>{item.nameProduct}</Text>
                    <Text>{item.price}</Text>
                    <Image source={{ uri: item.image }} />
                    <Text>{item.description}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={category}
                renderItem={renderItem}
                keyExtractor={(item) => item.idCate.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

            <FlatList
                data={listProduct}
                renderItem={renderItem1}
                keyExtractor={(item) => item.idProduct.toString()}
            />
        </View>
    );
}


const Libary = () => {
    return (
        <View style={styles.container}>
            <Text>Đây là libary</Text>
        </View>
    );
}

const customScreenOption = ({ route }) => ({
    headerShown: false,
    tabBarLabelStyle: { fontWeight: '400', fontSize: 11 },
    tabBarActiveTintColor: '#4838D1',
    tabBarInactiveTintColor: '#6A6A8B',
    tabBarStyle: {
        paddingBottom: 20,
        height: 70,
        paddingTop: 10
    },
    tabBarIcon: ({ focused }) => {
        if (route.name == "Home") {
            return focused
                ? <Image source={require('../../Lab/assets/ImagesLab/iconHomeTrue.png')} />
                : <Image source={require('../../Lab/assets/ImagesLab/iconHomeFalse.png')} />
        } else if (route.name == "Search") {
            return focused
                ? <Image source={require('../../Lab/assets/ImagesLab/iconSearchTrue.png')} />
                : <Image source={require('../../Lab/assets/ImagesLab/iconSearchFalse.png')} />
        } else {
            return focused
                ? <Image source={require('../../Lab/assets/ImagesLab/iconLibaryTrue.png')} />
                : <Image source={require('../../Lab/assets/ImagesLab/iconLibaryFalse.png')} />
        }
    }
})

const HomeStack = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Homee" component={Home} />
            <Stack.Screen name="Comp3Lab1" component={Comp3Lab1} />
        </Stack.Navigator>

    )
}
const Comp2Lab1 = () => {
    return (

        <Tab.Navigator
            screenOptions={customScreenOption}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Search" component={Seeach} />
            <Tab.Screen name="Libary" component={Libary} />
        </Tab.Navigator>
    );
}

export default Comp2Lab1;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 20,
    },
    scrollContainer: {
        marginTop: 15,
    },
    category: {
        padding: 15,
        backgroundColor: '#F5F5FA',
        marginRight: 10,
        borderRadius: 15,
        height: 50,
    },
    categoryText: {
        color: '#9292A2',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24
    },
});
