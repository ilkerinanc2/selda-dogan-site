import "./App.css";
import SiteMenu from "./components/SiteMenu";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <div>
      <div className="App">
        <SiteMenu></SiteMenu>
      </div>
      <div className="footer">
        <SiteFooter></SiteFooter>
      </div>
    </div>
  );
}

export default App;
