import logo from './logo.svg';
import './App.css';
import flowers from "./data.js";

var images ='';

for (let i = 0; i < flowers.length; i++) 
{ 
  images +=` <div class="imgs">
    <div class="img"><img src="` +
  flowers[i].picture +
  `" alt=""></div>
    <div class="name">` + flowers[i].name + `
    </div>
    </div>`; 
}

function App() {
  return (
    <div className="App">
      <div id="imgContainer">{images}</div>
    </div>
  );
}

export default App;
