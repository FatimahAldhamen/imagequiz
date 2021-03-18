import logo from './logo.svg';
import './App.css';
import flowers from "./data.js";

var images = new Array(new Array);

for (let i = 0;i < flowers.length;i++) 
{
  images[i][0] = flowers[i].picture;
  images[i][1] = flowers[i].name;
}

function App()
{
  return (
    <div className="App">
      <header className="App-header">
        <div id="imgContainer">
          {images.map(image => (
            <div class="imgs">
              <div class="img"><img src={image[0]} alt="" /></div>
              <div class="name">{image[1]}
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
