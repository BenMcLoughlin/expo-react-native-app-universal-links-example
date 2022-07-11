import React from 'react';
import {View, Text,  StyleSheet} from "react-native"

export const Product = () => {
return (
    <View style={styles.container}>
    <Text style={styles.text}>Product</Text>
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