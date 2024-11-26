import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Demo2 = (props) => {
    const { children } = props
    return (
        <View>
            <Text>Demo2</Text>
            {children}
        </View>
    )
}

export default Demo2

const styles = StyleSheet.create({})