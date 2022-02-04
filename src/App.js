import './App.css';
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MyContext} from "./contexts/MyContext";
import {useState} from "react";

function App() {

  const [getProduct, setProduct] = useState(null);

  return (
    <div className="App">
        <MyContext.Provider value={{getProduct, setProduct}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>} exact/>
                    <Route path="/product/:id" element={<ProductPage/>}/>
                </Routes>
            </BrowserRouter>
        </MyContext.Provider>
    </div>
  );
}

export default App;
