import logo from './logo.svg';
import './App.css';
import { Content } from './components/Content';
import Header from './components/Header';
import { MapDemo1 } from './components/MapDemo1';
import { UseStateDemo } from './components/UseStateDemo';
import { UseStateDemo2 } from './components/UseStateDemo2';
import { FormDemo1 } from './forms/FormDemo1';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { AmazonHome } from './components/amazon/AmazonHome';
import { AmazonProducts } from './components/amazon/AmazonProducts';
import { Error404 } from './components/amazon/Error404';
import { ProductDetail } from './components/amazon/ProductDetail';
import { FormDemo2 } from './forms/FormDemo2';
import { ApiDemo1 } from './api/ApiDemo1';
import { OmdbAPi } from './api/OmdbAPi';
import { UseEffectDemo } from './components/UseEffectDemo';
import { UpdateUser } from './api/UpdateUser';
import { ApiDemo2 } from './api/ApiDemo2';
import { Blogs } from './components/blogs/Blogs';
import { ProductComp } from './components/ProductComp';
import { BankComponent } from './components/BankComponent';
import { NodeApi } from './components/NodeApi';
import { EmployeeHome } from './components/EmployeeHome';

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
        <Route path ="/formdemo1" element = {<FormDemo1/>}></Route>
        <Route path='/formdemo2' element = {<FormDemo2/>}></Route>
        <Route path='/apidemo1' element = {<ApiDemo1/>}></Route>
      <Route path="/omdb" element = {<OmdbAPi/>}></Route>
      <Route path="/useeffect" element = {<UseEffectDemo/>}></Route>
      <Route path ="/updateuser/:id" element ={<UpdateUser/>}></Route>
      <Route path='/apidemo2' element ={<ApiDemo2/>}></Route>
      <Route path='/blogs' element ={<Blogs/>}></Route>
      <Route path="/prod" element = {<ProductComp/>}></Route>
      <Route path='/bankcomp' element = {<BankComponent/>}></Route>
      <Route path = "/nodeapi" element ={<NodeApi/>}></Route>
      <Route path ="/emphome" element={<EmployeeHome/>}></Route>
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
