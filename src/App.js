import './App.css';
import logo from './images/logoRide.png'

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
            <a class="login-btn" href="#"><button>Login</button></a>
          </ul>
        </nav>
      
      </header>
    </div>
  );
}

export default App;
