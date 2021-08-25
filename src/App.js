import './App.css';
import logo from './images/logoRide.png'
import car from './images/Frame-1.png'
import bike from './images/Frame-2.png'
import bus from './images/Frame.png'
import train from './images/Group.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img class="logo-img" src={logo} alt="" srcset="" />
        <nav>
          <ul>
            <li><a class="active" href="home">Home</a></li>
            <li><a href="destination">Destination</a></li>
            <li><a href="blog">Blog</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a class="login-btn" href="#">Login</a></li>
          </ul>
         
        </nav>
      </header>
      <main  className="container">
        <div  className="bike box">
          <img src={bike} alt="bike" />
          <h3>Bike</h3>
        </div>
        <div  className="car box">
          <img src={car} alt="car" />
          <h3>Car</h3>
        </div>
        <div  className="bus box">
          <img src={bus} alt="bus" />
          <h3>Bus</h3>
        </div>
        <div className="train box">
          <img src={train} alt="train" />
          <h3>Train</h3>
        </div>
      </main>
    </div>
  );
}

export default App;
