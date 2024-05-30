import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import data from "./data";

function App() {
  return (
    <>
      <Navbar />
      <div className="quote-separator">
      {data.map((waqya,index) =><Quote key={index} quote={waqya.quote} author={waqya.author}/>)}
      </div>
      <Footer />
    </>
  );
}

export default App;
