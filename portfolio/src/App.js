//import style
import "./styles/main.css";

import Navbar from "./componens/navbar/Navbar";
import Footer from "./componens/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="App">

      <Navbar />
        {/*<Home/>*/}
        <Projects />
        {/* <Contacts /> */}
      <Footer/>

    </div>
  );
}

export default App;
