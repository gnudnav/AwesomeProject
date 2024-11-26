import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Search from './Search';
import Noti from './Noti';
import Profile from './Profile';
import CayTrongDetail from './CayTrongDetail';
import ChauCayTrongDetail from './ChauCayTrongDetail';
import PhuKienDetail from './PhuKienDetail';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Payment from './Payment';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator()
const BottomTabNavigator = () => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    paddingBottom: 20,
                    height: 70,
                    paddingTop: 10,
                },
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => {
                    if (route.name === "Home") {
                        return focused
                            ? <Image source={require('../../assets/Images/iconHomeFocused.png')} />
                            : <Image source={require('../../assets/Images/iconHomeNotFocused.png')} />
                    } else if (route.name === "Search") {
                        return focused
                            ? <Image source={require('../../assets/Images/iconSearchFocused.png')} />
                            : <Image source={require('../../assets/Images/iconSearchNotFocused.png')} />
                    } else if (route.name === "Noti") {
                        return focused
                            ? <Image source={require('../../assets/Images/iconNotiFocused.png')} />
                            : <Image source={require('../../assets/Images/iconNotiNotFocused.png')} />
                    } else if (route.name === "Profile") {
                        return focused
                            ? <Image source={require('../../assets/Images/iconProfileFocused.png')} />
                            : <Image source={require('../../assets/Images/iconProfileNotFocused.png')} />
                    }
                },
            })}
        >
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Search" component={Search} />
            <Tabs.Screen name="Noti" component={Noti} />
            <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
    );
}
const MainTabNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
            <Stack.Screen name="CayTrongDetail" component={CayTrongDetail} />
            <Stack.Screen name="ChauCayTrongDetail" component={ChauCayTrongDetail} />
            <Stack.Screen name="PhuKienDetail" component={PhuKienDetail} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
    )
};

export default MainTabNavigator;

const styles = StyleSheet.create({});
