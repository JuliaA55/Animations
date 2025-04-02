import { StyleSheet, SafeAreaView } from 'react-native';
import ProgressBar from "../progressBar";


export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ProgressBar/>
    </SafeAreaView>
  );
}

