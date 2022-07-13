import "./App.css";
import { useEffect, useState } from "react";
import Home from "./Home/Js/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Test from "./Home/Test/js/Test";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          {/* <Route path="/test">
            <Test />
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//
//   const [curr, setCurr] = useState([]);
//   const [right, setRight] = useState();
//   const checkWord = (e) => {
//     if (e.key === " ") {
//       console.log(e.target.value);
//       e.target.value = null;
//     }
//   };
//   useEffect(() => {
//     typed.split(" ").forEach((char) => {
//       // const newList = curr.concat(char);
//       // console.log(char);
//       setCurr([...curr, char]);
//     });
//   }, []);
// {typed.split(" ").map((char, index) => {
//   return <span wordNumber={index}>{char} </span>;
// })}
// <br />
// <input onKeyPress={checkWord}></input>
