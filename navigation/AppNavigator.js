import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TabNavigator} from './TabNavigator';
import { enableScreens } from 'react-native-screens';

enableScreens();
const Stack = createNativeStackNavigator();

export const AppNavigator = () => {


    return (
        <>

                <NavigationContainer>
                    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="TabNavigator" component={TabNavigator} />
                    </Stack.Navigator>
                </NavigationContainer>
    

        </>
    );
};
