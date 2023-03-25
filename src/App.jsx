import "./App.css";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Products from "./component/products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Products />
    </div>
  );
}

export default App;
