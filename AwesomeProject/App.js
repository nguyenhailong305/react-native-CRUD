import { Provider } from "react-redux";
import store from "./src/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from 'react-native-paper';
import Router from "./src/navigation/index";



function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
      <Provider store={store}>
        <Router />
      </Provider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
export default App;
