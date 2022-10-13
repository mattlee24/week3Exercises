import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NewsHomePage from './NewsHomePage';
import RandomImageGenerator from './RandomImageGenerator';
import TopNav from './topNav';

export default function App() {
  return (
    <View style={styles.container}>
      <TopNav />
      <NewsHomePage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
  },
});
