import {StatusBar} from 'expo-status-bar'
import {StyleSheet, View, Text} from 'react-native'
import {Welcome, Signin, Signup, ForgotPwdNext, ForgotPwd, LoggedOut, VerifyPhone, ChangePwd} from "./screens/auth/IE.js"
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer style={styles.root}>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
           <Stack.Screen name="Signin" component={Signin} />
           <Stack.Screen name="Signup" component={Signup} /> 
           <Stack.Screen name="Verify Phone Number" component={VerifyPhone} />
           <Stack.Screen name="Logged Out" component={LoggedOut} />
           <Stack.Screen name="Change Password" component={ChangePwd} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
})

export default App