import "./App.css";
import Header from "./Pages/Header";
import Main from "./Pages/Main";
import CursorShadow from "./Utility/CursorShadow";

function App() {

  return (
    <div className="lg:flex lg:overflow-y-auto relative h-screen">
      <CursorShadow/>
      <Header />
      <Main />
    </div>
  );
}

export default App;
