import  {View, StyleSheet, Text} from "react-native"

const Welcome = () => {
  return (
    <View style={styles.root}>
      <Text>Welcome</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
})

export default Welcome