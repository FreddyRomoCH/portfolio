import { Home } from "./components/home/Home";
import { Aside } from "./components/home/Aside";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-home-radial md:grid md:grid-cols-12 h-screen w-screen items-center px-4 md:px-8 2xl:px-10 md:gap-5">
        <Aside />
        <Home />
      </div>
      <div>wdfgrwgrwgr</div>
    </>
  );
}

export default App;
