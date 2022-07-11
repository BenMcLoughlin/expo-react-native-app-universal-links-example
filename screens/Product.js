import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export const Product = ({ navigation }) => {
    const [url, setUrl] = useState('');

    const _handlePasswordResetUrl = async (event) => {
        let initialUrl = Linking.parse(event.url);

        if (!initialUrl) {
            initialUrl = await Linking.getInitialURL();
        }
        setUrl(initialUrl.path);
    };

    useEffect(() => {
        Linking.addEventListener('url', _handlePasswordResetUrl);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product</Text>
            <Text style={styles.text}>Url:{url}</Text>
            <TouchableOpacity style={styles.button}>
                <Icon name="chevron-left" size={25} color="white" />

                <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')}>
                    Visit Home Screen
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    title: {
        fontSize: 30
    },
    text: {
        fontSize: 12
    },
    buttonText: {
        fontSize: 20,

        color: 'white'
    },
    button: {
        backgroundColor: '#E18D7A',
        color: 'white',
        paddingTop: 15,
        borderRadius: 5,
        paddingBottom: 15,
        justifyContent: 'center',
        minHeight: 60,
        minWidth: 150,
        alignItems: 'center',
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row'
    }
});
