import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Inbox from "./features/inbox/Inbox";
import Spam from "./features/spam/Spam";
import Delete from "./features/delete/Delete";

import { GetInbox } from "./features/inbox/inboxSlice";
import { GetSpamData } from "./features/spam/spamSlice";
import { getDeleteData } from "./features/delete/deleteSlice";

function App() {
  const InboxDatas = useSelector(GetInbox);
  const SpamDatas = useSelector(GetSpamData);
  const DeleteDatas = useSelector(getDeleteData);
  const Inboxcount = InboxDatas.filter(({ unread }) => unread === true).length;
  const Spamcount = SpamDatas.filter(({ unread }) => unread === true).length;
  const DeleteCount = DeleteDatas.filter(({ unread }) => unread === true)
    .length;

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
                  <span className="nav-link">
                    <Link to="/inbox">Inbox </Link>{" "}
                    <span className="badge  bg-secondary rounded-pill mt-auto text-white">
                      {Inboxcount}
                    </span>
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    <Link to="/spam">Spam </Link>
                    <span className="badge  bg-secondary rounded-pill mt-auto text-white">
                      {Spamcount}
                    </span>
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    <Link to="/delete">Deleted Items </Link>
                    <span className="badge  bg-secondary rounded-pill mt-auto text-white">
                      {DeleteCount}
                    </span>
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    <Link to="/admin">Custom Folder</Link>
                  </span>
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
