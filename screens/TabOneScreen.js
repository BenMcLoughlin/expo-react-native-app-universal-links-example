import {useEffect, useState} from "react"
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as Linking from 'expo-linking';

export default function TabOneScreen({ navigation }) {

  const [url, setUrl] = useState('');

  const _handlePasswordResetUrl = async (event) => {
    let initialUrl = Linking.parse(event.url);
    console.log('/TabOneScreen.js - initialUrl: ', initialUrl)
    if (!initialUrl) {
        initialUrl = await Linking.getInitialURL();
    }

        setUrl(initialUrl.path)

    
};

useEffect(() => {
  console.log('Hello from TabOneScreen')
    Linking.addEventListener('url', _handlePasswordResetUrl);

  
}, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text style={styles.title}>Url: {url}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
