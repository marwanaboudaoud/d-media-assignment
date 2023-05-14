import "./assets/scss/app.scss";
import { NavBar } from './components/Navbar';
import { MyRouts } from "./components/Routs";

function App() {
  return (
    <div className="App container">
      <NavBar />
      <MyRouts />
    </div>
  );
}

export default App;
