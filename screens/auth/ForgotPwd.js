import  {View, StyleSheet, Text, TextInput, Image} from "react-native"
import Button from "../../components/Button.js"

const ForgotPwd = () => {
  const handleSubmit = () => {
    console.log(5)
  }
  
  return (
    <View style={styles.root}>
      <View style={styles.top}>
        <View style={styles.top}>
          <Image style={styles.img} source={require("../../assets/images/forgotPwd.jpg")} />
        </View>
      </View>
      <View style={styles.bottom}>
        <TextInput style={styles.input} placeholder="Enter your Email" placeholderTextColor="#2A454E" />
        <View style={styles.btn}>
          <Button title="Submit" onPress={handleSubmit} bgColor="#2A454E" txtColor="white" />
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
    flex: 1
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
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    alignItems: "center",
    width: "100%",
    marginTop: 9
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#2A454E",
    borderRadius: 8,
    width: "80%",
    marginVertical: 8,
    padding: 8,
    paddingLeft: 15,
    fontWeight: "bold"
  }
})

export default ForgotPwd