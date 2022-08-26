import  {View, StyleSheet, Text} from "react-native"

const Home = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.txt}>Welcome</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: "30",
    textAlign: "center"
  }
})

export default Home