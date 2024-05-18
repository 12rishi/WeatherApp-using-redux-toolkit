import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Card />
      </Provider>
    </>
  );
}

export default App;
