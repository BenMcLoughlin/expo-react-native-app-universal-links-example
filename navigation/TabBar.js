import React from 'react';
import { TouchableOpacity, Text, View,  StyleSheet } from 'react-native';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';



export const TabBar = ({ state, descriptors, navigation }) => {
    const icons = {
        Home: {
            active: 'home',
            inactive: 'home-outline'
        },
        Product: {
          active: 'cart',
          inactive: 'cart-outline'
        },
    };

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                        }}
                        key={route.key}>
                        <Icon
                            name={icons[route.name].inactive}
size={25}
color={isFocused ? "#E18D7A" : "#36434E"}
                        />

                        <Text style={{color: isFocused ? "#E18D7A" : "#36434E"}}>
                            {route.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
const styles = StyleSheet.create({
     container: {
         flex: 0.1, 
         alignItems: 'center',
         borderTop: '1px solid red',
         justifyContent: 'center',
         flexDirection: 'row',
         borderWidth: 1,
     },
     text: {
        fontSize: 30,
     },
 });