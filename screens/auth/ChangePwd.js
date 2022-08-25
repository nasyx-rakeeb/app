import  {View, StyleSheet, KeyboardAvoidingView, Platform, Text, TextInput, Image} from "react-native"
import Button from "../../components/Button.js"

const ChangePwd = () => {
  const handleChange = () => {
    console.log(5)
  }
  
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.root}>
      <View style={styles.top}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={require("../../assets/images/changePwd.png")} />
        </View>
      </View>
      <View style={styles.bottom}>
        <TextInput style={styles.input} placeholder="Old Password" placeholderTextColor="#E5322B" />
        <TextInput style={styles.input} placeholder="New Password" placeholderTextColor="#E5322B" />
        <TextInput style={styles.input} placeholder="Confirm New Password" placeholderTextColor="#E5322B" />
        <View style={styles.btn}>
          <Button title="Change" onPress={handleChange} bgColor="#675EB0" txtColor="white" />
        </View>
      </View>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 2,
  },
  top: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    alignItems: "center"
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
  input: {
    borderWidth: 1.5,
    borderColor: "#E5322B",
    borderRadius: 8,
    width: "80%",
    marginVertical: 8,
    padding: 8,
    fontWeight: "bold",
    paddingLeft: 20
  },
  btn: {
    width: "100%",
    alignItems: "center",
    marginTop: 9
  }
})

export default ChangePwd