import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Productn from "./pages/Productn";
import Createp from "./pages/Createp";
import Editp from "./pages/Editp";
import Editse from "./pages/Editse";
import Createse from "./pages/Createse";
import Servicen from "./pages/Servicen";

function App() {
  return (
    <div className="overflow-hidden no-scrollbar">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/blog" component={Blog} />
          <Route path="/productn" component={Productn} />
          <Route path="/servicen" component={Servicen} />
          <Route path="/contact" component={Contact} />
          <Route path="/create" component={Create} />
          <Route path="/createp" component={Createp} />
          <Route path="/createse" component={Createse} />
          <Route path="/edit" component={Edit} />
          <Route path="/editp" component={Editp} />
          <Route path="/editse" component={Editse} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
