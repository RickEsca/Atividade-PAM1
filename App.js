import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './AppEstilo';
import Titulo from './components/Titulo';
import Card from './components/Card';
import Card2 from './components/Card2';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>     
      <Card/>     
      <Card2/>     
      <StatusBar style="auto" />
    </View>
  );
}
