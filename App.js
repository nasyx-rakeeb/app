import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View} from 'react-native'

const App = () => {
  return (
    <View style={styles.root}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App