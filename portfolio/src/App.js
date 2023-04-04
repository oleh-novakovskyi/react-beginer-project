//import style
import "./styles/main.css";

import Navbar from "./componens/navbar/Navbar";
import Footer from "./componens/footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">

      <Navbar />
        <Home/>
      <Footer/>

    </div>
  );
}

export default App;
