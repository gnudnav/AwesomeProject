import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { listCategory, listProductByCateLab1 } from './apiLab1'
const Seeach = () => {
    const [listDanhmuc, setListDanhMuc] = useState([])
    const [listProductByCate, setListProductByCate] = useState([])
    const [selected, setSelected] = useState(1)
    const handleSelectedSeeach = (idCate) => {
        console.log("idCate: ", idCate)
        setSelected(idCate)
    }
    const category = async () => {
        try {
            const data = await listCategory()
            setListDanhMuc(data)
            console.log("listDanhMuc: ", JSON.stringify(data));
        } catch (error) {
            console.log("ket noi Api Category that bai", error);
        }
    }
    const fetchProductByCate = async (idCate) => {
        try {
            const listByCate = await listProductByCateLab1(idCate)
            console.log(idCate);

            setListProductByCate(listByCate)
            console.log("listProductByCate ", JSON.stringify(listByCate));
        } catch (error) {
            console.log("ket noi Api ProductByCate that bai", error);
        }
    }
    useEffect(() => {
        category()
    }, [])
    useEffect(() => {
        if (selected) {
            fetchProductByCate(selected)
        }
    }, [selected])
    const renderItem = ({ item }) => {
        return (
            <View style={{ marginLeft: 40 }}>
                <TouchableOpacity onPress={() => handleSelectedSeeach(item.idCate)}>
                    <Image source={{ uri: item.image }} style={{ width: 40, height: 40 }} />
                    <Text>{item.nameCate}</Text>
                    <Text>{item.idCate}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderItem1 = ({ item }) => {
        return (
            <View>
                <Text>{item.nameProduct}</Text>
                <Text>{item.price}</Text>
                <Image source={{ uri: item.image }} />
                <Text>{item.description}</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>

            <FlatList
                data={listDanhmuc}
                renderItem={renderItem}
                keyExtractor={(item) => item.idCate.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={{ backgroundColor: 'red' }}
            />
            <FlatList
                data={listProductByCate}
                renderItem={renderItem1}
                keyExtractor={(item) => item.idProduct.toString()}

            />
        </View>
    )
}

export default Seeach

const styles = StyleSheet.create({})