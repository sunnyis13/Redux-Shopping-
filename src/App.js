import './App.css';
import Header from './containers/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductsListing from './containers/ProductsListing';
import ProductsDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path="/" exact element={<ProductsListing/>}/>
            <Route path="/product/:productId" element={<ProductsDetails/>}/>
            <Route>404 Not Found!</Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
