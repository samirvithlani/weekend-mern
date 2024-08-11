import logo from './logo.svg';
import './App.css';
import { Content } from './components/Content';
import Header from './components/Header';
import { MapDemo1 } from './components/MapDemo1';
import { UseStateDemo } from './components/UseStateDemo';
import { UseStateDemo2 } from './components/UseStateDemo2';
import { FormDemo1 } from './components/FormDemo1';

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
      {/* <button onClick={test}>Test</button> */}
      <Header title ={title} d = {data} test={test}></Header>
      {/* <UseStateDemo></UseStateDemo> */}
      {/* <UseStateDemo2></UseStateDemo2> */}
      {/* <FormDemo1/> */}
      {/* <Content></Content> */}
      {/* <MapDemo1 title = {title}></MapDemo1> */}
    </div>
  );
}

export default App;
