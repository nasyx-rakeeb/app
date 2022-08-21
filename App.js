import {StatusBar} from 'expo-status-bar'
import {StyleSheet, View, SafeAreaView, Text} from 'react-native'
import {Welcome, Signin, Signup, ForgotPwdNext, ForgotPwd, Logout, VerifyPhone, ChangePwd} from "./screens/auth/IE.js"

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
        <StatusBar style="auto" />
        <Welcome />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
})

export default App