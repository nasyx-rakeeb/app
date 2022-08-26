import  {View, Platform, StyleSheet, Text, TextInput, Image, KeyboardAvoidingView} from "react-native"
import Button from "../../components/Button.js"
import TxtBtn from "../../components/txtBtn.js"
import axios from "axios"

const Signup = ({navigation}) => {
  const handleSignUp = () => {
    console.log(5)
  }
  const handleSignIn = () => {
    navigation.navigate("Signin")
  }
  
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.root}>
      <View style={styles.top}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={require("../../assets/images/signup.png")} />
        </View>
      </View>
      <View style={styles.bottom}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#26DEC0" />
        <TextInput style={styles.input} placeholder="Phone No with + and country code" placeholderTextColor="#26DEC0" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#26DEC0" />
        <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#26DEC0" />
        <View style={styles.btn}>
          <Button title="Sign Up" onPress={handleSignUp} bgColor="#35474F" txtColor="white" />
        </View>
        <TxtBtn title="Already have an account? SignIn Instead" txtColor="#35474F" onPress={handleSignIn} />
      </View>
   </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 2,
  },
  top: {
    flex: .8
  },
  imgContainer: {
    justifyContent: "center"
  },
   img: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    alignSelf: "center"
  },
  bottom: {
    flex: 1.2,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  btn: {
    alignItems: "center",
    width: "100%",
    marginTop: 9
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#26DEC0",
    borderRadius: 8,
    width: "80%",
    marginVertical: 8,
    padding: 8,
    paddingLeft: 15,
    fontWeight: "bold"
  }
})

export default Signup