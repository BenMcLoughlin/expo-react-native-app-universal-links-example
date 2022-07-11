import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

export const Home = ({ navigation }) => {



    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
    
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('Product')}>
                    Visit Product Screen
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
    text: {
        fontSize: 30
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
        paddingRight: 20
    }
});
