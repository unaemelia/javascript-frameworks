import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Items from "./pages/Items";
import Item from "./pages/Item";
import ManageItems from "./pages/admin/ManageItems";
import CreateItem from "./pages/admin/CreateItem";
import CreateCategory from "./pages/admin/CreateCategory";
import UpdateItem from "./pages/admin/UpdateItem";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Items} />
          <Route path="/item/:productId" component={Item} />
          <Route path="/manage-items" component={ManageItems} />
          <Route path="/create-item" component={CreateItem} />
          <Route path="/update-item/:productId" component={UpdateItem} />
          <Route path="/create-category" component={CreateCategory} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
