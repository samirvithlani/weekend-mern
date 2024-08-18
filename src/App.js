import logo from './logo.svg';
import './App.css';
import { Content } from './components/Content';
import Header from './components/Header';
import { MapDemo1 } from './components/MapDemo1';
import { UseStateDemo } from './components/UseStateDemo';
import { UseStateDemo2 } from './components/UseStateDemo2';
import { FormDemo1 } from './components/FormDemo1';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { AmazonHome } from './components/amazon/AmazonHome';
import { AmazonProducts } from './components/amazon/AmazonProducts';
import { Error404 } from './components/amazon/Error404';
import { ProductDetail } from './components/amazon/ProductDetail';

function App() {

var title = "Ahmedabad";
var data = {
  country: "India",
  state: "Gujarat",
}

const test = () => {
  alert("Test");
}
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path = "/" element = {<h1>HOME PAGE</h1>}></Route>
        <Route path="/amazonhome" element = {<AmazonHome/>}></Route>
        <Route path = "/amazonproduct" element = {<AmazonProducts/>}></Route>
        <Route path ="/amazonproduct/productdetail/:id" element = {<ProductDetail/>}></Route>
        {/* <Route path = "/*" element = {<h1>404</h1>}></Route> */}
        <Route path = "*" element = {<Error404/>}></Route>
      </Routes>
      {/* <button onClick={test}>Test</button> */}
      {/* <Header title ={title} d = {data} test={test}></Header> */}
      {/* <UseStateDemo></UseStateDemo> */}
      {/* <UseStateDemo2></UseStateDemo2> */}
      {/* <FormDemo1/> */}
      {/* <Content></Content> */}
      {/* <MapDemo1 title = {title}></MapDemo1> */}
    </div>
  );
}

export default App;
