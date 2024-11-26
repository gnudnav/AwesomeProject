import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Demo1 = () => {
    const player = [
        { name: 'Messi', goals: 20 },
        { name: 'Ronaldo', goals: 9 },
        { name: 'Bale', goals: 15 },
        { name: 'Ramos', goals: 3 },
        { name: 'Neymar', goals: 6 },
        { name: 'Kroos', goals: 10 },
    ]
    const nation = "Brazil"
    return (
        <View>
            <Text>Demo cơ bản{nation}</Text>
            <Text style={styles.hello}>Danh sách các cầu thủ</Text>
            {
                player.map((player, index) => {
                    return (
                        <Text key={index}>{player.name}</Text>
                    )
                })
            }
        </View>
    )
}
export default Demo1

const styles = StyleSheet.create({
    hello: {
        color: 'red',
        fontSize: 20,
        fontWeight: '20'
    }
})