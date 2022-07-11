import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from './TabBar';
import { Home,Product } from '../screens';
const Tab = createBottomTabNavigator();

export function TabNavigator() {

    return (
        <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
       
            />
            <Tab.Screen name="Product" component={Product} />
        </Tab.Navigator>
    );
}
