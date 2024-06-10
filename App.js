import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DeviceMotion } from 'expo-sensors'
import { useEffect } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sample NSMotionUsageDescription App!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

useEffect(() => {
  DeviceMotion.addListener((motion) => {
    console.log(JSON.stringify(motion))
  })
}, [])

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
