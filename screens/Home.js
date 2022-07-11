import React, {useState, useEffect} from 'react';
import {View, Text,  StyleSheet} from "react-native"
import * as Linking from 'expo-linking';

export const Home = ({navigation}) => {

    const [url, setUrl] = useState('');

    const _handlePasswordResetUrl = async (event) => {
        let initialUrl = Linking.parse(event.url);
        if (!initialUrl) {
            initialUrl = await Linking.getInitialURL();
        }
        setUrl(initialUrl);
    };


    useEffect(() => {
        Linking.addEventListener('url', _handlePasswordResetUrl);
    }, [navigation]);

return (
         <View style={styles.container}>
             <Text style={styles.text}>Home</Text>
             <Text style={styles.text}>Url:{url}</Text>
         </View>
     );
 };

 const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    text: {
       fontSize: 30,
    },
});