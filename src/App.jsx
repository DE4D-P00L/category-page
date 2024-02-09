import Nav from "./components/Nav";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <div>
      <Nav />
      <div className="">
        <Store />
        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
