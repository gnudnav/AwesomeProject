import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { jsx } from 'react/jsx-runtime'

const Lab4 = () => {
    const [data, setData] = useState([
        {
            'id': 1,
            'name': 'ghe',
            'image': 'https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-a-solid-wood-backrest-chair-image_1414702.jpg'
        },
        {
            'id': 2,
            'name': 'ban',
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc60rhAdN2HjaWFvze7MY3nO28KcH3u61MKQ&s'
        },
        {
            'id': 3,
            'name': 'but',
            'image': 'https://hoctotvan.com/wp-content/uploads/2018/12/ta-cay-but-chi.jpg?w=900'
        },
        {
            'id': 4,
            'name': 'vo',
            'image': 'https://png.pngtree.com/element_our/20190529/ourmid/pngtree-learning-stationery-notebook-illustration-image_1218895.jpg'
        },
        {
            'id': 5,
            'name': 'ghe',
            'image': 'https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-a-solid-wood-backrest-chair-image_1414702.jpg'
        },
        {
            'id': 6,
            'name': 'but',
            'image': 'https://hoctotvan.com/wp-content/uploads/2018/12/ta-cay-but-chi.jpg?w=900'
        },
        {
            'id': 7,
            'name': 'ban',
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc60rhAdN2HjaWFvze7MY3nO28KcH3u61MKQ&s'
        },
        {
            'id': 8,
            'name': 'vo',
            'image': 'https://png.pngtree.com/element_our/20190529/ourmid/pngtree-learning-stationery-notebook-illustration-image_1218895.jpg'
        },
        {
            'id': 9,
            'name': 'ly',
            'image': 'https://dungcubarcafe.com/wp-content/uploads/ly-coffe-mug-350-xanh.jpg'
        },
        {
            'id': 10,
            'name': 'ly',
            'image': 'https://dungcubarcafe.com/wp-content/uploads/ly-coffe-mug-350-xanh.jpg'
        },
        {
            'id': 11,
            'name': 'cap',
            'image': 'https://i.pinimg.com/564x/b0/ab/08/b0ab08d5a89d783ca5d1596753243b98.jpg'
        },
        {
            'id': 12,
            'name': 'cap',
            'image': 'https://i.pinimg.com/564x/b0/ab/08/b0ab08d5a89d783ca5d1596753243b98.jpg'
        }
    ])
    const [selectedItem, setSelectedItem] = useState(null)
    const [random, setRandom] = useState(null)
    const handleSelectedItem = (item) => {
        if (selectedItem) {
            if (selectedItem.name == item.name) {
                if (selectedItem.id !== item.id) {
                    const newData = data.filter(i => i.id !== selectedItem.id && i.id != item.id)
                    setData(newData)
                }
            }
            setSelectedItem(null)
        } else {
            setSelectedItem(item)
        }
    }

    const renderItem = ({ item }) => {
        const isSelected = selectedItem && selectedItem.id === item.id
        return (
            <View >
                <TouchableOpacity
                    onPress={() => handleSelectedItem(item)}
                    style={{
                        borderWidth: 1, marginLeft: 5, borderColor: 'black', marginBottom: 10,
                        backgroundColor: isSelected ? 'white' : 'blue'
                    }}
                >
                    <Image source={{ uri: item.image }} style={{ width: 115, height: 100 }} />
                </TouchableOpacity>
            </View>
        )
    }



    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                style={{ marginTop: 20, }} />

        </View>
    )
}

export default Lab4

const styles = StyleSheet.create({})