import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Linking from 'expo-linking';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Product } from './screens';

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
    const linking = {
        prefixes: [Linking.createURL('/')],
        config: {
            screens: {
                Home: 'home',
                //   Product: 'product/:id?',
                Product: {
                    path: 'user/:id/:section',
                    parse: {
                        id: (id) => `user-${id}`
                    },
                    stringify: {
                        id: (id) => id.replace(/^user-/, '')
                    }
                }
            }
        }
    };

    return (
        <SafeAreaProvider>
            <NavigationContainer linking={linking}>
                <Stack.Navigator mode="modal" screenOptions={{ headerShown: true }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Product" component={Product} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
