//import logo from './logo.svg';
//import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  //we can declare some variable here and some javascript after retur n it 
  //const title = 'this is starter blog to revise react tricks ';
  // let persone = {name : 'salim',age : 29}
  // const link= 'http://www.google.com';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
       <h1>this is React JS</h1>
        {/* <h3>Hello this is just  a { title } </h3> */}
        <Home />
        {/* React cant call boolean & object like this exemple below  */}
      {/* <p> I'm { persone }</p> */}
      {/* <p>{'this is string : My name is taha yacine salim '}</p>
      <p>{"this is anumber : "+30}</p>
      <p>{ [1,2,3,4]}</p> */}
      {/* <a href={link}>this is a link </a> */}
      </div>
    </div>
  );
}

export default App;
