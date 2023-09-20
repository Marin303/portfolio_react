import "./App.css";
import Header from "./Pages/Header";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="bg-slate-900 flex overflow-y-auto">
      <Header />
      <Main/>
    </div>
  );
}

export default App;
