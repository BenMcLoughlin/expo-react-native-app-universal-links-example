import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './TabNavigator';
import { enableScreens } from 'react-native-screens';
import * as Linking from 'expo-linking';
import { Product } from '../screens/Product';
import { Home } from '../screens/Home';
import { Text } from 'react-native';

enableScreens();
const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    const linking = {
        prefixes: [Linking.createURL('/')],
        config: {
            screens: {
                Home: 'home',
                Product: 'product/*'
            }
        }
    };

    return (
        <>
            <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
                <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
                    {/* <Stack.Screen name="TabNavigator" component={TabNavigator} /> */}
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Product" component={Product} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};
