import  {View, StyleSheet, Text, Pressable} from "react-native"

const Button = ({title, onPress, bgColor, txtColor}) => {
  return (
    <View style={[styles.root, {backgroundColor: bgColor}]}>
      <Pressable onPress={onPress}>
        <Text style={[styles.btnTxt, {color: txtColor}]}>{title}</Text>
      </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "80%",
    height: 20,
  },
  btnTxt: {
    textAlign: "center"
  }
})

export default Button