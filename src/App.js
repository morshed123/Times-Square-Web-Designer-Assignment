import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import ImageSlider from './Components/ImageSlider/ImageSlider';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Header></Header>
     <ImageSlider></ImageSlider>
    
    </div>
  );
}

export default App;
