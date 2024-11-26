import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Comp1Lab1 from './Comp1Lab1';
import Comp2Lab1 from './Comp2Lab1';
import CompLogin from './CompLogin';

const Stack = createStackNavigator();
const Lab1 = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="CompLogin" component={CompLogin} />
                <Stack.Screen name="Comp1Lab1" component={Comp1Lab1} />
                <Stack.Screen name="Comp2Lab1" component={Comp2Lab1} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Lab1

const styles = StyleSheet.create({})