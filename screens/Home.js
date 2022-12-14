import  {View, StyleSheet, Text} from "react-native"
import Button from "../components/Button.js"
import axios from "axios"

const Home = ({navigation}) => {
const showWelcome = () => navigation.navigate("Welcome")
const showSignin = () => navigation.navigate("Signin")
const showSignup = () => navigation.navigate("Signup")
const showVerify = () => navigation.navigate("Verify Phone Number")
const showLogged = () => navigation.navigate("Logged Out")
const showForgot = () => navigation.navigate("Forgot Password")
const showInbox = () => navigation.navigate("Check Your Inbox")
const showChange = () => navigation.navigate("Change Password")
  
  return (
    <View style={styles.root}>
      <Button title="Welcome Screen" onPress={showWelcome} bgColor="black" txtColor="white" />
      <Button title="Signin Screen" onPress={showSignin} bgColor="black" txtColor="white" />
      <Button title="Signup Screen" onPress={showSignup} bgColor="black" txtColor="white" />
      <Button title="Verify Ph No Screen" onPress={showVerify} bgColor="black" txtColor="white" />
      <Button title="Logged Out Screen" onPress={showLogged} bgColor="black" txtColor="white" />
      <Button title="Forgot Password Screen" onPress={showForgot} bgColor="black" txtColor="white" />
      <Button title="Check Your Inbox Screen" onPress={showInbox} bgColor="black" txtColor="white" />
      <Button title="Change Password Screen" onPress={showChange} bgColor="black" txtColor="white" />
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  txt: {
    fontSize: 50,
    fontWeight: "bold"
  }
})

export default Home