import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Route, useRouteMatch } from "react-router-dom";
import InboxData from "./InboxData";
import {
  GetInbox,
  toggleTodo,
  toggleFlag,
  removeMail,
  deltethunk,
} from "./inboxSlice";
import { toggleDeleteTodo } from "../delete/deleteSlice";

const Inbox = () => {
  const InboxDatas = useSelector(GetInbox);
  const Dispatch = useDispatch();
  const { url } = useRouteMatch();
  const [filter, setFilter] = useState();
  // flitering based on project types
  const filteredProjects = !filter
    ? InboxDatas
    : InboxDatas.filter((project) => project[filter]);
  // map those fliter items
  const linkList = filteredProjects.map((product) => {
    return (
      <Link
        to={`${url}/${product.id}`}
        className="text-decoration-none"
        key={product.id}
      >
        <a
          className="list-group-item list-group-item-action"
          onClick={() => Dispatch(toggleTodo(product.id))}
          style={{
            fontWeight: product.unread ? "700" : "400",
          }}
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{product.subject}</h5>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <a
                className="nav-link p-0 px-1"
                onClick={() => Dispatch(toggleFlag(product.id))}
                style={{
                  color: product.isflag ? "#f30" : "#007bff",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-flag"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" y1="22" x2="4" y2="15"></line>
                </svg>
              </a>
              <a
                className="nav-link p-0 px-1"
                onClick={() => Dispatch(deltethunk(product))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="feather feather-trash-2"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </a>
            </div>
          </div>
          <p className="mb-1 text-truncate">
            {product.isflag}
            <span dangerouslySetInnerHTML={{ __html: product.content }}></span>
          </p>
        </a>
      </Link>
    );
  });

  return (
    <div className="container-fluid overflow-hidden p-0">
      <div className="row">
        <div className="col-md-4 col-lg-4  p-0">
          <div
            className="btn-toolbar border-right"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group me-2 ml-auto m-2"
              role="group"
              aria-label="First group"
            >
              {/* filter based on values */}
              <button
                type="button"
                className={`btn btn-outline-secondary border-0 outline btn-sm ${
                  filter ? "none" : "active"
                }`}
                onClick={() => setFilter()}
              >
                All
              </button>
              <button
                type="button"
                className={`btn btn-outline-secondary border-0 outline btn-sm ${
                  filter ? "active" : "none"
                }`}
                onClick={() => setFilter("isflag")}
              >
                Flagged
              </button>
            </div>
          </div>
          {/* get values from splice method and pass it to the list */}
          <div className="list-group sidebar2">{linkList}</div>
        </div>
        {linkList.length ? (
          <div className="col-md-8 ms-sm-auto col-lg-8 mt-4">
            {/* nested routes start */}
            <Route path={`${url}/:productId`}>
              <InboxData data={InboxDatas} />
            </Route>
            <Route exact path={url}>
              <div className="col-md-8 col-lg-8">
                <div className="card border-0">
                  <div className="card-body text-center">
                    <h4>Please select any message...</h4>
                  </div>
                </div>
              </div>
            </Route>
            {/* nested route ended */}
          </div>
        ) : (
          // null itmes found
          <div className="col-md-8 ms-sm-auto col-lg-8 mt-4">
            <div className="card border-0">
              <div className="card-body text-center">
                <h4>No Items Found</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
