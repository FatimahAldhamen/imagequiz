import logo from './logo.svg';
import './App.css';
import flowers from "./data.js";


function App()
{
  return (
    <div className="App">
      <header className="App-header">
        <div id="imgContainer">
          {flowers.map(flower => (
            <div class="imgs">
              <div class="img"><img src={flower.picture} alt="" /></div>
              <div class="name">{flower.name}
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
