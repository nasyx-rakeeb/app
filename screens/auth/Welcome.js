import  {View, StyleSheet, Text, Image} from "react-native"
import Button from "../../components/Button.js"

const Welcome = ({navigation}) => {
  const handleSignUp = () => {
    console.log(5)
  }
  const handleSignIn = () => {
    console.log(6)
  }
  
  return (
    <View style={styles.root}>
      <View style={styles.imgContainer}>
        <Image source={require("../../assets/images/welcome.png")} />
      </View>
      <View style={styles.txtContainer}>
        <Text>Welcome To NSX Studio</Text>
        <Text>Well for now i have nothing to write here, but later i will be adding some random fucking anything here, till then stay fucked up</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button title="SignUp" onPress={handleSignUp} bgColor="#1B4152" txtColor="white" />
        <Button title="SignIn" onPress={handleSignIn} bgColor="#225268" txtColor="white" />
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 3
  },
  imgContainer: {
    flex: 1
  },
  txtContainer: {
    flex: 1
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row"
  }
})

export default Welcome