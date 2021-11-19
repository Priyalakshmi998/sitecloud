// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./containers/Navbar";
import SideNav from "./containers/SideNav";
import PublicRoute from "./containers/Routes/PublicRoute";//Use this for routing for upcomming components
function App() {
  return (

    <main>
      <Navbar/>
      <SideNav/>
    </main>
    
  );
}

export default App;
