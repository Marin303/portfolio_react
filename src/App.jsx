import "./App.css";
import Header from "./Pages/Header";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="lg:flex lg:overflow-y-auto">
      <Header />
      <Main/>
    </div>
  );
}

export default App;
