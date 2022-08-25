import  {View, StyleSheet, Text, TextInput, Image} from "react-native"
import Button from "../../components/Button.js"

const VerifyPhone = () => {
  const handleVerify = () => {
    console.log(5)
  }
  
  return (
    <View style={styles.root}>
      <View style={styles.top}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={require("../../assets/images/VerifyPhone.png")} />
        </View>
      </View>
      <View style={styles.bottom}> 
        <Text style={styles.txt}>An OTP has been sent to your phone number, please check your inbox</Text>
        <TextInput keyboardType="numeric" style={styles.input} placeholder="Enter OTP here" placeholderTextColor="#D268CC" />
        <View style={styles.btn}>
          <Button title="Verify" onPress={handleVerify} bgColor="#2A454E" txtColor="white" />
        </View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 2
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
    justifyContent: "flex-start"
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#D268CC",
    padding: 8,
    width: "80%",
    borderRadius: 8,
    marginVertical: 9,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18
  },
  btn: {
    marginVertical: 9,
    alignItems: "center",
    width: "100%"
  },
  txt: {
    color: "#2A454E",
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 32,
    letterSpacing: 2,
    lineHeight: 27,
    marginVertical: 12
  }
})

export default VerifyPhone