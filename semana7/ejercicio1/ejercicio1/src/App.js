import logo from "./logo.svg";
import "./App.css";
import DashBoard from "./screens/home/DashBoard";
function App() {
  return (
    <View style={styles.container}>
      <DashBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
  },
});

export default App;
