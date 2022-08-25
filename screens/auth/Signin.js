import  {View, StyleSheet, Text, TextInput, Image} from "react-native"
import Button from "../../components/Button.js"
import TxtBtn from "../../components/txtBtn.js"

const Signin = ({navigation}) => {
  const handleLogIn = () => {
    console.log(5)
  }
  const handleForgotPwd = () => {
    console.log(6)
    navigation.navigate("Change Password")
  }
  const handleSignup = () => {
    navigation.navigate("Signup")
  }
  
  return (
    <View style={styles.root}>
      <View style={styles.top}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={require("../../assets/images/login.png")} />
        </View>
      </View>
      <View style={styles.bottom}>
        <TextInput style={styles.input} placeholder="Email or phone number with + and country code" placeholderTextColor="#5549AB" />
        <TextInput style={styles.input} placeholder="Enter your password here" placeholderTextColor="#5549AB" />
        <View style={styles.loginBtn}>
        <Button title="Log In" onPress={handleLogIn} bgColor="#5549AB" txtColor="white" />
        <View style={styles.otherBtns}>
          <TxtBtn title="Forgot Password" txtColor="#5549AB" onPress={handleForgotPwd} />
          <TxtBtn title="Signup" txtColor="#5549AB" onPress={handleSignup} />
        </View>
        </View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 2,
    backgroundColor: "white"
  },
  top: {
    flex: 1,
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
    flex: 1,
  //  justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderWidth: 1,
    width: "80%",
    borderRadius: 8,
    marginVertical: 9,
    padding: 8,
    borderColor: "#5549AB"
  },
  otherBtns: {
    flexDirection: "row",
  },
  loginBtn: {
    marginVertical: 9,
    alignItems: "center",
    width: "100%"
  }
})

export default Signin