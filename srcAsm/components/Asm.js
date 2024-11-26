import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackAuthen from './Authen/StackAuthen';
import MainTabNavigator from './Main/MainTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const Asm = () => {
    const Stacks = createStackNavigator()
    return (
        <NavigationContainer>
            <Stacks.Navigator screenOptions={{ headerShown: false }}>
                <Stacks.Screen name="Authen" component={StackAuthen} />
                <Stacks.Screen name="Main" component={MainTabNavigator} />
            </Stacks.Navigator>
            <Text></Text>
        </NavigationContainer>
    )
}

export default Asm

const styles = StyleSheet.create({})
