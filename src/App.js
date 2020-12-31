import "./App.css";

import { Link, Route, Switch, Redirect } from "react-router-dom";
import Inbox from "./Inbox";
import Spam from "./features/spam/Spam";
import Delete from "./features/delete/Delete";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3">Company name</a>
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar ">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="/inbox">Inbox</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="/spam">Spam</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="/delete">Deleted Items</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to="/admin">New Folder</Link>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-0">
            <Switch>
              <Redirect exact from="/" to="inbox" />
              <Route path="/inbox">
                <Inbox />
              </Route>
              <Route path="/spam">
                <Spam />
              </Route>
              <Route path="/delete">
                <Delete />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
